const {CirculantMatrix} = require("./circulantMatrix");
const {Vector} = require("./Vector");
const {circulantMatrixSolve} = require("./circulantMatrixSolve");
const {transpose} = require("../util/plotUtils");
const plotly = require('plotly')('renevds', 'JkEIl6zB2XtyWLLI8NX3')

const t = 0.1
const N = 13
const x = (10 * Math.PI) / N

const A = new CirculantMatrix(-30, 16, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 16)
const I = new CirculantMatrix(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
const C = (A.mul(Math.pow(t, 2) / Math.pow(x, 2)).sub(I))

//let hk_1 = new Vector(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
//let hk_1 = new Vector(0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0)
//let hk_1 = new Vector(0, 0, 0.1, 0.3, 0.5, 0.70, 0.8, 0.70, 0.5, 0.3, 0.1, 0, 0)
//let hk_1 = new Vector(1, 0.5, 0, 0, 0, -0.5, -1, -0.5, 0, 0, 0, 0, 0.5)
//let hk_1 = new Vector(1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
let hk_1 = new Vector(0, 0, 0.1, 0.3, 0.5, 0.70, 0.8, 0.70, 0.5, 0.3, 0.1, 0, 0)
console.log(hk_1.size)
let hk = new Vector(...hk_1.content)
console.log(hk.size)

const STEPS = 500
const states = []
for (let i = 0; i < STEPS; i++) {
  const b = hk_1.sub(hk.mul(2))
  const h_next = circulantMatrixSolve(C, b, false)
  hk_1 = hk
  hk = h_next
  states.push(h_next.content)
}

const data = [
  {
    z: transpose(states),
    type: "surface",
    colorscale: "Jet"
  }
];

const layout = {
  scene: {
    xaxis: {
      title: "Time",
    },
    yaxis: {
      title: "x",
    },
    zaxis: {
      title: "Wave height",
    },
    aspectratio: {
      x: 2,
      y: 1,
      z: 1
    }
  }
};

const graphOptions = {filename: "heatmap", fileopt: "overwrite", layout};
plotly.plot(data, graphOptions, function (err, msg) {
  console.log(msg);
});

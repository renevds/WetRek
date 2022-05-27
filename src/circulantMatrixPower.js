const Complex = require("complex.js");
const {CirculantMatrix} = require("./circulantMatrix");
const {getFourierNormalized} = require("../util/fourierUtils");

function calcPower(circulantMatrix, m){
  const N = circulantMatrix.size

  // Calculate diagonal
  const diag = []
  for (let j = 0; j < N; j++) {
    let next = new Complex(0);
    for (let i = 0; i < N; i++) {
      let part = circulantMatrix.get(0, i)
      if(circulantMatrix.isNumberType){
        part = new Complex(part);
      }
      next = next.add(part.mul(getFourierNormalized(i, j, N)));
    }
    diag.push(next)
  }

  // Power of diagonal elements
  const diagPowered = diag.map(a => a.pow(m))

  // Times fourier inverse (not needed)
  const diagFourierInverse = diagPowered

  // Times fourier
  const diagFourier= []
  for (let i = 0; i < N; i++) {
    let next = new Complex(0);
    for (let j = 0; j < N; j++) {
      next = next.add(diagFourierInverse[j].mul(getFourierNormalized(j, i, N)))
    }
    diagFourier.push(next);
  }

  // Divide by n
  const res = diagFourier.map(a => a.div(N))

  return new CirculantMatrix(...res.map(a => a.re))
}

module.exports = {calcPower}
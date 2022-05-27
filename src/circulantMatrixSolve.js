const Complex = require("complex.js");
const {Vector} = require("./Vector");
const {getFourierNormalized, getFourierNormalizedInverse} = require("../util/fourierUtils");
const {CirculantMatrix} = require("./circulantMatrix");


function circulantMatrixSolve(C, b, round=false){
  const N = C.size
  const fourierInside = [];
  for (let i = 0; i < N; i++) {
    let fb = new Complex(0)
    let fc = new Complex(0)
    for (let j = 0; j < N; j++) {
      let bval = b.get(j);
      let cval = C.get(0, j);
      if(C.isNumberType){
        cval = new Complex(cval)
      }
      if(b.isNumberType){
        bval = new Complex(bval)
      }
      fb = fb.add(getFourierNormalized(i, j, N).mul(bval))
      fc = fc.add(getFourierNormalized(i, j, N).mul(cval))
      let asda = 0
    }
    if(round){
      fb.re = +fb.re.toFixed(10)
      fb.im = +fb.im.toFixed(10)
      fc.re = +fc.re.toFixed(10)
      fc.im = +fc.im.toFixed(10)
    }
    fourierInside.push(fb.div(fc))
  }


  const res = []

  for (let i = 0; i < N; i++) {
    let temp = new Complex(0);
    for (let j = 0; j < N; j++) {
      temp = temp.add(getFourierNormalizedInverse(i, j, N).mul(fourierInside[j]))
    }
    res.push(temp);
  }

  return new Vector(...res.map(a => a.re/N))
}

module.exports = {circulantMatrixSolve}
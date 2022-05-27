const Complex = require("complex.js");
const {mod} = require("./mathUtils");

function getFourierNormalized(j, k, N){
  return new Complex({phi:(-2*j*k*Math.PI)/N, r: 1})
}
function getFourierNormalizedInverse(j, k, N){
  return getFourierNormalized(k, j, N).conjugate()
}

module.exports = {getFourierNormalized, getFourierNormalizedInverse}
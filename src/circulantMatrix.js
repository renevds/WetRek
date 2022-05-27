const {Vector} = require("./Vector");
const {mod} = require("../util/mathUtils");

class CirculantMatrix extends Vector {
  get name() {
    return "CirculantMatrix";
  }

  getInstance(...args){
    return new CirculantMatrix(...args);
  }

  get(i, j) {
    return this.content[mod((i - j), this.size)]
  }

  toString() {
    let ret = ""
    for (let j = 0; j < this.size; j++) {
      ret += " "
      for (let i = 0; i < this.size; i++) {
        ret += this.get(i, j).toString() + ","
      }
      ret = ret.slice(0, -1)
      ret += '\n'
    }
    return "[" + ret.slice(0, -1).substring(1) + ']'
  }

  vector_mul(v) {
    let res = []
    for (let i = 0; i < this.size; i++) {
      let temp = 0;
      for (let j = 0; j < this.size; j++) {
        temp += v.get(j) * this.get(i, j)
      }
      res.push(temp)
    }
    return new Vector(...res)
  }

  matrix_mul(m) {
    let res = []
    for (let i = 0; i < this.size; i++) {
      let temp = 0;
      for (let j = 0; j < this.size; j++) {
        temp += this.content[j] * m.get(j, i)
      }
      res.push(temp)
    }
    return new CirculantMatrix(...res)
  }

  mul(m) {
    if (!isNaN(m)) {
      return this.scalar_mul(m);
    } else if (m instanceof Vector && !(m instanceof CirculantMatrix)) {
      return this.vector_mul(m);
    } else if (m instanceof CirculantMatrix) {
      return this.matrix_mul(m);
    } else {
      this.vectorError(`Can't multiply ${this.name} with ${v.name}`)
    }
  }

}

module.exports = {CirculantMatrix}
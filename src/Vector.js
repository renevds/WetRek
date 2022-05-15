const Complex = require('complex.js');


const NUMBER_TYPE = "number"
const COMPLEX_TYPE = "complex"


class Vector {

  get name() {
    return "Vector"
  }

  checkIfVector(v) {
    !(v instanceof Vector) && this.vectorError(`Argument must be another ${this.name}`) // Check if a vector
  }


  vectorError(err) {
    throw new Error(this.name + " error: " + err)
  }

  constructor(...args) {
    args.length < 1 && this.vectorError(this.name + " must contain at least one item") // Check if not empty

    this.type = args[0] instanceof Complex ? COMPLEX_TYPE : NUMBER_TYPE // Set vector type

    isNaN(args[0]) && !(args[0] instanceof Complex) && this.vectorError(this.name + " type not supported") // Check if type supported

    if(this.isNumberType){
      !args.every(a => !isNaN(a)) && this.vectorError("All elements must be a number")
    }
    else{
      !args.every(a => a instanceof Complex) && this.vectorError("All elements must be an instance of Complex")
    }

    this.content = args // Set vector content
  }

  get isNumberType(){
    return this.type === NUMBER_TYPE
  }

  checkSameType(v) {
    return this.type === v.type
  }

  get(i) {
    i instanceof Number && this.vectorError("Index should be number") // Check if index is Number
    i >= this.content.length && this.vectorError("Index out of bounds") // Check if index within Vector
    return this.content[i];
  }


  add(v) {
    this.checkIfVector(v)
    !this.checkSameType(v) && this.vectorError(`Cant add ${this.name} with type ${v.type.toString()} to ${v.name} with type ${this.type.toString()}`) // Check if types match
    if (this.isNumberType) {
      return new Vector(...this.content.map((val, i) => val + v.content[i]))
    } else {
      return new Vector(...this.content.map((val, i) => val.add(v.content[i])))
    }
  }

  sub(v) {
    this.checkIfVector(v)
    !this.checkSameType(v) && this.vectorError(`Cant subtract ${this.name} with type ${v.type.toString()} to ${v.name} with type ${this.type.toString()}`) // Check if types match
    if (this.isNumberType) {
      return new Vector(...this.content.map((val, i) => val - v.content[i]))
    } else {
      return new Vector(...this.content.map((val, i) => val.sub(v.content[i])))
    }
  }

  scalar_mul(a){
    if (this.isNumberType) {
      return new Vector(...this.content.map(val => val*a))
    } else {
      return new Vector(...this.content.map(val => val.mul(a)))
    }
  }

  mul(v) {
    if(!isNaN(v)){
      return this.scalar_mul(v);
    }
    else {
      this.vectorError(`Can't multiply ${this.name} with ${v.name}`)
    }
  }

  get size(){
    return this.content.length
  }

  toString(){
    return `[${this.content.toString().replaceAll(',', ',\n ')}]`;
  }
}


module.exports = {Vector}
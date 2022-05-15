const {Vector} = require("../src/Vector");
const Complex = require("complex.js");

describe("Vector Tests", () => {
  describe("Vector Creation", () => {
    test('Create Vector with 1 Number', () => {
      const v = new Vector(1)
      expect(v.get(0)).toEqual(1)
    });

    test('Create Vector with 1 Complex number', () => {
      const v = new Vector(new Complex("1 + i"))
      expect(v.get(0)).toEqual(new Complex("1 + i"))
    });

    test('Create Vector with 5 Numbers', () => {
      const numbers = [5, 865, 1, 2, 5]
      const v = new Vector(...numbers)
      numbers.forEach((n, i) => {
        expect(v.get(i)).toEqual(n)
      })
    });

    test('Create Vector with 5 Complex numbers', () => {
      const numbers = [new Complex("1 + i"), new Complex("0"), new Complex("1231 + 567i"), new Complex("2i"), new Complex("1")]
      const v = new Vector(...numbers)
      numbers.forEach((n, i) => {
        expect(v.get(i)).toEqual(n)
      })
    });
  })

  describe("Vector addition", () => {
    test('Add 2 number Vectors', () => {
      const v1 = new Vector(1)
      const v2 = new Vector(2)
      const v3 = v1.add(v2)
      expect(v3.get(0)).toEqual(3)
    });

    test('Add 2 complex Vectors', () => {
      const v1 = new Vector(new Complex("1 + i"))
      const v2 = new Vector(new Complex("2 + 3i"))
      const v3 = v1.add(v2)
      expect(v3.get(0)).toEqual(new Complex("3 + 4i"))
    });

    test('Add 2 number Vectors of size 2', () => {
      const v1 = new Vector(1, 1)
      const v2 = new Vector(1, 1)
      const v3 = v1.add(v2)
      expect(v3.get(0)).toEqual(2)
      expect(v3.get(1)).toEqual(2)
    });
  })

  describe("Vector subtraction", () => {
    test('Subtract 2 number Vectors', () => {
      const v1 = new Vector(1)
      const v2 = new Vector(2)
      const v3 = v1.sub(v2)
      expect(v3.get(0)).toEqual(-1)
    });

    test('Subtract 2 complex Vectors', () => {
      const v1 = new Vector(new Complex("1 + i"))
      const v2 = new Vector(new Complex("2 + 3i"))
      const v3 = v1.sub(v2)
      expect(v3.get(0)).toEqual(new Complex("-1 - 2i"))
    });

    test('Subtract 2 number Vectors of size 2', () => {
      const v1 = new Vector(1, 1)
      const v2 = new Vector(1, 1)
      const v3 = v1.sub(v2)
      expect(v3.get(0)).toEqual(0)
      expect(v3.get(1)).toEqual(0)
    });
  })

  describe("Vector scalar multiplication", () => {
    test('Multiply number Vector with scalar', () => {
      const v1 = new Vector(1)
      const v2 = v1.mul(2)
      expect(v2.get(0)).toEqual(2)
    });

    test('Multiply complex Vector with scalar', () => {
      const v1 = new Vector(new Complex("1 + i"))
      const v2 = v1.mul(2)
      expect(v2.get(0)).toEqual(new Complex("2 + 2i"))
    });
  })

  describe("Vector size", () => {
    test('Test Vector with size 1', () => {
      const v1 = new Vector(1)
      expect(v1.size).toEqual(1)
    });

    test('Test Vector with size 5', () => {
      const v1 = new Vector(1,1,1,1,1)
      expect(v1.size).toEqual(5)
    });
  })

  describe("Vector string representation", () => {
    test('Test Vector with size 5', () => {
      const v1 = new Vector(1,1,1,1,1)
      expect(v1.size).toEqual(5)
    });
  })

})
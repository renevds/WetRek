const {CirculantMatrix} = require("../src/circulantMatrix");
const Complex = require("complex.js");
const {Vector} = require("../src/Vector");
const {mod} = require("../util/mathUtils");


describe("CirculantMatrix Tests", () => {
  describe("CirculantMatrix Creation", () => {
    test('Create CirculantMatrix with 1 Number', () => {
      const v = new CirculantMatrix(1)
      expect(v.get(0,0)).toEqual(1)
    });

    test('Create CirculantMatrix with 1 Complex number', () => {
      const v = new CirculantMatrix(new Complex("1 + i"))
      expect(v.get(0,0)).toEqual(new Complex("1 + i"))
    });

    test('Create CirculantMatrix with 5 Numbers', () => {
      const numbers = [5, 865, 1, 2, 5]
      const v = new CirculantMatrix(...numbers)
      numbers.forEach((_, i) => {
        numbers.forEach((_, j) => {
          expect(v.get(i,j)).toEqual(numbers[mod(i - j, numbers.length)])
        })
      })
    });

    test('Create CirculantMatrix with 5 Complex numbers', () => {
      const numbers = [new Complex("1 + i"), new Complex("0"), new Complex("1231 + 567i"), new Complex("2i"), new Complex("1")]
      const v = new CirculantMatrix(...numbers)
      numbers.forEach((_, i) => {
        numbers.forEach((_, j) => {
          expect(v.get(i,j)).toEqual(numbers[mod(i - j, numbers.length)])
        })
      })
    });
  })

  describe("CirculantMatrix addition", () => {
    test('Add 2 number CirculantMatrices', () => {
      const v1 = new CirculantMatrix(1)
      const v2 = new CirculantMatrix(2)
      const v3 = v1.add(v2)
      expect(v3.get(0, 0)).toEqual(3)
    });

    test('Add 2 complex CirculantMatrices', () => {
      const v1 = new CirculantMatrix(new Complex("1 + i"))
      const v2 = new CirculantMatrix(new Complex("2 + 3i"))
      const v3 = v1.add(v2)
      expect(v3.get(0, 0)).toEqual(new Complex("3 + 4i"))
    });

    test('Add 2 number CirculantMatrices of size 2', () => {
      const v1 = new CirculantMatrix(1, 1)
      const v2 = new CirculantMatrix(1, 1)
      const v3 = v1.add(v2)
      expect(v3.get(0, 0)).toEqual(2)
      expect(v3.get(1, 0)).toEqual(2)
      expect(v3.get(0, 1)).toEqual(2)
      expect(v3.get(1, 1)).toEqual(2)
    });
  })

  describe("CirculantMatrix subtraction", () => {
    test('Subtract 2 number CirculantMatrices', () => {
      const v1 = new CirculantMatrix(1)
      const v2 = new CirculantMatrix(2)
      const v3 = v1.sub(v2)
      expect(v3.get(0, 0)).toEqual(-1)
    });

    test('Subtract 2 complex CirculantMatrices', () => {
      const v1 = new CirculantMatrix(new Complex("1 + i"))
      const v2 = new CirculantMatrix(new Complex("2 + 3i"))
      const v3 = v1.sub(v2)
      expect(v3.get(0, 0)).toEqual(new Complex("-1 - 2i"))
    });

    test('Subtract 2 number CirculantMatrices of size 2', () => {
      const v1 = new CirculantMatrix(1, 2)
      const v2 = new CirculantMatrix(1, 2)
      const v3 = v1.sub(v2)
      expect(v3.get(0, 0)).toEqual(0)
      expect(v3.get(0, 1)).toEqual(0)
      expect(v3.get(0, 0)).toEqual(0)
      expect(v3.get(0, 1)).toEqual(0)
    });
  })

  describe("CirculantMatrix string representation", () => {
    test('Test CirculantMatrix with size 3x3', () => {
      const v1 = new CirculantMatrix(1, 2, 3)
    });

    test('Test CirculantMatrix with size 5x5', () => {
      const v1 = new CirculantMatrix(1, 2, 3, 4, 5)
    });
  })

  describe("CirculantMatrix scalar multiplication", () => {
    test('Multiply number CirculantMatrix with scalar', () => {
      const v1 = new CirculantMatrix(1)
      const v2 = v1.mul(2)
      expect(v2.get(0, 0)).toEqual(2)
    });

    test('Multiply complex CirculantMatrix with scalar', () => {
      const v1 = new CirculantMatrix(new Complex("1 + i"))
      const v2 = v1.mul(2)
      expect(v2.get(0, 0)).toEqual(new Complex("2 + 2i"))
    });
  })

  describe("CirculantMatrix with Vector multiplication", () => {
    test('Multiply 2x2 number CirculantMatrix with Vector', () => {
      const m = new CirculantMatrix(1, 2)
      const v1 = new Vector(2, 3)
      const v2 = m.mul(v1)
      expect(v2.get(0)).toEqual(8)
      expect(v2.get(1)).toEqual(7)
    });
  })

  describe("CirculantMatrix with CirculantMatrix multiplication", () => {
    test('Multiply 2x2 number CirculantMatrix with CirculantMatrix', () => {
      const m1 = new CirculantMatrix(1, 2)
      const m2 = new CirculantMatrix(2, 3)
      const m3 = m1.mul(m2)
      expect(m3.get(0,0)).toEqual(8)
      expect(m3.get(1,0)).toEqual(7)
    });

    test('Multiply 3x3 number CirculantMatrix with CirculantMatrix', () => {
      const m1 = new CirculantMatrix(1, 2, 3)
      const m3 = m1.mul(m1)
      expect(m3.get(0,0)).toEqual(14)
      expect(m3.get(1,0)).toEqual(11)
      expect(m3.get(2,0)).toEqual(11)
    });
  })

})
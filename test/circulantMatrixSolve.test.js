const {getFourierNormalized, calcPower} = require("../src/circulantMatrixPower");
const Complex = require("complex.js");
const {CirculantMatrix} = require("../src/circulantMatrix");
const {testContent} = require("../util/testUtils");
const {Vector} = require("../src/Vector");
const {circulantMatrixSolve} = require("../src/circulantMatrixSolve");


describe("CirculantMatrixSolveTests", () => {
  describe("Solve matrices tests", () => {
    test('2x2 system 1', () => {
      testContent(circulantMatrixSolve(new CirculantMatrix(1, 0), new Vector(1, 1)), [1, 1])
    });

    test('2x2 system 2', () => {
      testContent(circulantMatrixSolve(new CirculantMatrix(1, 1), new Vector(0, 0)), [0, 0])
    });

    test('3x3 system', () => {
      testContent(circulantMatrixSolve(new CirculantMatrix(1, 2, 3), new Vector(4, 5, 6)), [1.1666666666666667, 1.1666666666666667, 0.16666666666666666])
    });
  })
})
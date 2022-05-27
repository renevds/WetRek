const {getFourierNormalized, calcPower} = require("../src/circulantMatrixPower");
const Complex = require("complex.js");
const {CirculantMatrix} = require("../src/circulantMatrix");
const {testContent} = require("../util/testUtils");


describe("CirculantMatrixPower Tests", () => {
  describe("Criculant matrix power tests", () => {
    test('Test 3x3 to power 2', () => {
      testContent(calcPower(new CirculantMatrix(1, 2, 3), 2), [13, 13, 10])
    })

    test('Test 3x3 to power 4', () => {
      testContent(calcPower(new CirculantMatrix(1, 2, 3), 4), [429, 438, 429])
    })

    test('Test 5x5 to power 10', () => {
      testContent(calcPower(new CirculantMatrix(5, 9, 6, 5, 2), 10), [41178100406499, 41178088737170, 41178267398785, 41178389331145, 41178286221050])
    })
  })
})
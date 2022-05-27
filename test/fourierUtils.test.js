
const Complex = require("complex.js");
const {getFourierNormalized} = require("../util/fourierUtils");
describe("Fourier tests", () => {
  describe("Get Fourier tests", () => {
    test('Fourier with j=0 should be 0', () => {
      expect(getFourierNormalized(0, 5, 5).re).toEqual(1)
    });

    test('Fourier with k=0 should be 0', () => {
      expect(getFourierNormalized(5, 0, 5).re).toEqual(1)
    });

    test('Fourier with k=1 and j=1 should be omega', () => {
      expect(getFourierNormalized(1, 1, 5)).toEqual(new Complex({phi: (-2 * Math.PI) / 5, r: 1}))
    });
  })
})
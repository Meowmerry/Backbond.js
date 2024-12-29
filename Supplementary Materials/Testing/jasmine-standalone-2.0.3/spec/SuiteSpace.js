describe("Suite", function () {
  let calculator;

  beforeEach(function () {
    calculator = new Suite()
  })

  afterEach(function () {

  })

  describe("muiltiple:", function () {
    it("should be able to multiple two numbers.", function () {
      const result = calculator.muiltiple(2, 3);

      expect(result).toEqual(6)
    })

    it('should be called with the right arguments.', function () {
      spyOn(calculator, 'muiltiple');

      calculator.muiltiple(2, 5)

      expect(calculator.add).toHaveBeenCalled();
    })
  })

})
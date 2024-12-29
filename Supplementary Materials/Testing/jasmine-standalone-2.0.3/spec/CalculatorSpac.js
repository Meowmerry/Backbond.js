describe("Calculator", function () {
  let calculator;

  beforeEach(function () {
    calculator = new Calculator()
  });

  afterEach(function () {

  })

  // To test add method
  describe("add:", function () {
    it("should be abot to add 2 numbers.", function () {
      const result = calculator.add(2, 3)
      expect(result).toEqual(5);

    });
    it("should throw an error if both arguments are not provided.", function () {
      expect(function () {
        calculator.add(1)
      }).toThrow();

    });

    it("should be called with the right arguemtns.", function () {
      spyOn(calculator, "add").and.returnValue(7);

      const result = calculator.add(2, 5)

      expect(result).toEqual(7);

      expect(calculator.add).toHaveBeenCalled();

      expect(calculator.add).toHaveBeenCalledWith(2, 5)
    });


    // it("should be return undefined.", function () {
    //   spyOn(calculator, "add").and.returnValue(undefined);

    //   expect(result).toBeUndefined();
    // });


    it("should be throwError if failed.", function () {
      spyOn(calculator, "add").and.throwError('someError');

      expect(function () {
        const result = calculator.add(2, 5)

      }).toThrowError('someError')
    });

  });

  describe("muiltiple:", function () {
    it("should be able to multiple two numbers.", function () {
      const result = calculator.muiltiple(2, 3);

      expect(result).toEqual(6)
    })

    it("should throw an error if both arguments are not provided.", function () {
      expect(function () {
        calculator.muiltiple(1)
      }).toThrow();

    });

    it('should be called with the right arguments.', function () {
      spyOn(calculator, 'muiltiple');

      calculator.muiltiple(2, 5)

      expect(calculator.muiltiple).toHaveBeenCalled();
    })

    it("should be called with the right result with 10", function () {
      spyOn(calculator, "muiltiple").and.returnValue(10);

      const result = calculator.muiltiple(2, 5)

      expect(result).toEqual(10);

      expect(calculator.muiltiple).toHaveBeenCalled();

      expect(calculator.muiltiple).toHaveBeenCalledWith(2, 5)
    });

    it("should be throwError if failed.", function () {
      spyOn(calculator, "muiltiple").and.throwError('someError');

      expect(function () {
        const result = calculator.muiltiple(2, 5)

      }).toThrowError('someError')
    });

  })



})
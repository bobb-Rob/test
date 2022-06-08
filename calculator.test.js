const Calculator = require('./calculator')

describe('add', () => {

    const calculator = new Calculator();

    test('add 2 & 4 to equal 6', () => {
      let a = 2, b = 4;
      const result = calculator.add(a,b);
      expect(result).toEqual(6);
    });

    test('add -2 & -14 to equal -16', () => {
      let a = -2, b = -14;
      const result = calculator.add(a,b);
      expect(result).toEqual(-16);
    });

    test('add 22 & -140 to equal -118', () => {
      let a = 22, b = -140;
      const result = calculator.add(a,b);
      expect(result).toEqual(-118);
    });
});

describe('subtract', () => {
    const calculator = new Calculator();
    test('subtract 22 & 40 to equal -18', () => {
        let a = 22, b = 40;
        const result = calculator.subtract(a,b);
        expect(result).toEqual(-18);
      });
  
      test('subtract 22 & 40 to equal -18', () => {
        let a = 42, b = 40;
        const result = calculator.subtract(a,b);
        expect(result).toEqual(2);
      });
  
      test('subtract 0 & 0 to equal 0', () => {
        let a = 0, b = 0;
        const result = calculator.subtract(a,b);
        expect(result).toEqual(0);
      })  
})

describe('divide', () => {
    const calculator = new Calculator();
    test('divide 100 & 0 to equal 0', () => {
        let a = 100, b = 0;
        const result = calculator.divide(a,b);
        expect(result).toEqual(Infinity);
      })
  
      test('divide -120 & 4 to equal -30', () => {
        let a = -120, b = 4;
        const result = calculator.divide(a,b);
        expect(result).toEqual(-30);
      });
  
      test('divide 1 & 2 to equal 0.5', () => {
        let a = 1, b = 2;
        const result = calculator.divide(a,b);
        expect(result).toEqual(0.5);
      });
})

describe('multiply', () => {
    const calculator = new Calculator();
   
    test('multiply 1 & 2 to equal 2', () => {
        let a = 1, b = 2;
        const result = calculator.multiply(a,b);
        expect(result).toEqual(2);
      })
      test('multiply 11 & 2 to equal 2', () => {
        let a = 11, b = 2;
        const result = calculator.multiply(a,b);
        expect(result).toEqual(22);
      })
      test('multiply -41 & 2 to equal -82', () => {
        let a = -41, b = 2;
        const result = calculator.multiply(a,b);
        expect(result).toEqual(-82);
      })
})
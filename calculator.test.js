const Calculator = require('./calculator');

// Üksustestid
describe('Calculator unit tests', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('Addition of positive numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('Subtraction of positive numbers', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test('Multiplication of positive numbers', () => {
    expect(calculator.multiply(5, 6)).toBe(30);
  });

  test('Division of positive numbers', () => {
    expect(calculator.divide(15, 3)).toBe(5);
  });

  test('Addition of negative numbers', () => {
    expect(calculator.add(-5, -3)).toBe(-8);
  });

  test('Subtraction of negative numbers', () => {
    expect(calculator.subtract(-10, -2)).toBe(-8);
  });

  test('Multiplication of negative numbers', () => {
    expect(calculator.multiply(-4, -3)).toBe(12);
  });

  test('Division of negative numbers', () => {
    expect(calculator.divide(-15, -5)).toBe(3);
  });
});

// Integratsioonitestid
describe('Calculator integration tests', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('Addition and subtraction integration', () => {
    // Kombineerib liitmise ja lahutamise, et kontrollida, kas tulemus on õige
    const result = calculator.subtract(calculator.add(5, 3), 2);
    expect(result).toBe(6);
  });

  test('Multiplication and division integration', () => {
    // Kombineerib korrutamise ja jagamise, et kontrollida, kas tulemus on õige
    const result = calculator.divide(calculator.multiply(4, 2), 3);
    expect(result).toBeCloseTo(2.666666667);
  });
});

// Süsteemitestid
describe('Calculator system tests', () => {
  test('Complete calculation', () => {
    const calculator = new Calculator();
    // Täielik arvutus, kombineerides mitu tehet
    const result = calculator.add(calculator.multiply(2, 4), calculator.divide(10, 2));
    expect(result).toBe(13);
  });
});

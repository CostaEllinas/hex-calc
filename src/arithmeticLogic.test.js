import { addHex, subtractHex, multiplyHex, divideHex } from './arithmeticLogic';

describe('Hexadecimal Calculator Functions', () => {
  test('adds two hex numbers correctly', () => {
    expect(addHex('1A', '05')).toBe('1F'); // 26 + 5 = 31 => '1F'
    expect(addHex('FF', '01')).toBe('100'); // 255 + 1 = 256 => '100'
  });

  test('subtracts two hex numbers correctly', () => {
    expect(subtractHex('1F', '05')).toBe('1A'); // 31 - 5 = 26 => '1A'
    expect(subtractHex('10', '10')).toBe('0'); // 16 - 16 = 0 => '0'
  });

  test('does not allow negative subtraction results', () => {
    expect(() => subtractHex('05', '1F')).toThrow('Result is negative');
  });

  test('multiplies two hex numbers correctly', () => {
    expect(multiplyHex('0A', '02')).toBe('14'); // 10 * 2 = 20 => '14'
    expect(multiplyHex('FF', '02')).toBe('1FE'); // 255 * 2 = 510 => '1FE'
  });

  test('divides two hex numbers correctly', () => {
    expect(divideHex('1E', '02')).toBe('F'); // 30 / 2 = 15 => 'F'
    expect(divideHex('10', '10')).toBe('1'); // 16 / 16 = 1 => '1'
  });

  test('throws error on division by zero', () => {
    expect(() => divideHex('1A', '00')).toThrow('Division by zero');
  });

  test('throws error on decimal result', () => {
    expect(() => divideHex('1A', '03')).toThrow('Result is not a whole number');
  });

  test('throws error when result exceeds 4 digits', () => {
    expect(() => multiplyHex('FFFF', '10')).toThrow('Result exceeds 4 hex digits');
  });
});

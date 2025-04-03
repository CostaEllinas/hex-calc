const hexToDec = (hex) => parseInt(hex, 16);
const decToHex = (dec) => dec.toString(16).toUpperCase();

const checkValidOutput = (dec) => {
  if (dec < 0) throw new Error('Result is negative');
  if (!Number.isInteger(dec)) throw new Error('Result is not a whole number');
  if (decToHex(dec).length > 4) throw new Error('Result exceeds 4 hex digits');
};

export function addHex(a, b) {
  const result = hexToDec(a) + hexToDec(b);
  checkValidOutput(result);
  return decToHex(result);
}

export function subtractHex(a, b) {
  const result = hexToDec(a) - hexToDec(b);
  checkValidOutput(result);
  return decToHex(result);
}

export function multiplyHex(a, b) {
  const result = hexToDec(a) * hexToDec(b);
  checkValidOutput(result);
  return decToHex(result);
}

export function divideHex(a, b) {
  const divisor = hexToDec(b);
  if (divisor === 0) throw new Error('Division by zero');


  const result = hexToDec(a) / divisor;
  checkValidOutput(result);
  return decToHex(result);
}

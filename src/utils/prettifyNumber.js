import isNumber from "lodash/isNumber";

const prettifyNumber = (value, valueType) => {
  value = value || 0;

  if (!isNumber(value)) {
    throw new Error("Value not a number!");
  } else if (value > 1e19 || value < -1e19) {
    throw new Error("Value out of range!");
  }

  const sign = Number(value) < 0 ? "-" : "";
  let short;
  let exponent;
  let size;
  const numSuffixes = {
    "": 3,
    K: 6,
    M: 9,
    B: 12,
    T: 16
  };

  value = Math.abs(value);
  size = value.toString().length;

  exponent = size % 3 === 0 ? size - 3 : size - size % 3;
  short = Math.round(10 * (value / Math.pow(10, exponent))) / 10;

  for (const suffix in numSuffixes) {
    if (exponent < numSuffixes[suffix]) {
      short += suffix;
      break;
    }
  }

  const tpls = {
    count: `${short}`,
    number: `${short}`,
    integer: `${short}`,
    currency: `${sign}$${short}`,
    currency_simple: `${sign}$${value}`,
    percent: `${sign}${value}%`
  };

  return tpls[valueType];
};

export default prettifyNumber;
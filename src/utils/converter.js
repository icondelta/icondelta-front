import BigNumber from 'bignumber.js';

const isBigNumber = (value) => {
  return BigNumber.isBigNumber(value);
};

const toBigNumber = (value) => {
  if (isBigNumber(value)) return value;
  if (typeof value === 'string') {
    value = value.replace(/,/gi, '');
  }
  return new BigNumber(`${value}`);
};

export const multiply = (x, y) => toBigNumber(x).times(y).toNumber();

export const loopToIcx = (loop) => {
  if (!loop) return 0;

  const parsed = toBigNumber(loop)
    .dividedBy(10 ** 18)
    .toString(10);

  const parts = parsed.split('.');

  if (parts[1]?.length > 9) {
    return toBigNumber(parsed).toFixed(8);
  }
  return parsed;
};

export const icxToLoop = (icx) =>
  toBigNumber(icx)
    .times(10 ** 18)
    .toNumber();

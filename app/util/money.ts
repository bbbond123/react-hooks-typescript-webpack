import numeral from 'numeral';

/** truncates number */
const truncFunc = (num: number) => Math[num < 0 ? 'ceil' : 'floor'](num);

export const floorAmount = (value: string | number, format = '0,0.00') => {
  return numeral(value || 0).format(format, truncFunc);
};

export const defaultTableAmountRenderer = (val: string | number) => floorAmount(val);

export const oneDecimalFormat = (val: number) => numeral(val).format('0,0.0');

export const fourDecimalFormat = (val: number) => numeral(val).format('0,0.0000');

export const getCurrencyConversion = (val: number) => {
  const adjustedValue = val * 10; // 1 decimal
  const truncatedValue = Math[adjustedValue < 0 ? 'ceil' : 'floor'](adjustedValue) / 10;
  return truncatedValue;
};

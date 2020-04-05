import { TOKENS } from './consts';

export const getToken = symbol => TOKENS.find(token => token.symbol === symbol);

export const isEmptyObject = obj => {
  return !obj || !Object.keys(obj).length;
};

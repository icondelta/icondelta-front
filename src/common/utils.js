import { TOKENS } from './consts';

export const findToken = symbol => TOKENS.find(token => token.symbol === symbol);

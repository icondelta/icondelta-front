import { SCORE_ADDRESS } from '../../lib/consts';

const basebody = (method, params) =>
  JSON.stringify({
    id: `${+new Date()}${Math.ceil(Math.random() * 10)}`,
    jsonrpc: '2.0',
    method,
    params,
  });

const queryBody = (params) => basebody('icx_call', { dataType: 'call', ...params });

export const walletICXBody = (address) => basebody('icx_getBalance', { address });

export const depositedICXBody = (address) =>
  queryBody({
    to: SCORE_ADDRESS,
    data: {
      method: 'balanceOf',
      params: {
        _address: address,
      },
    },
  });

export const walletTokenBody = (address, tokenAddress) =>
  queryBody({
    to: tokenAddress,
    data: {
      method: 'balanceOf',
      params: { _owner: address },
    },
  });

export const depositedTokenBody = (address, tokenAddress) =>
  queryBody({
    to: SCORE_ADDRESS,
    data: {
      method: 'tokenBalanceOf',
      params: { _address: address, _tokenAddress: tokenAddress },
    },
  });

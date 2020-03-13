import { SCORE_ADDRESS } from '../../common/consts';

const basebody = (method, params) =>
  JSON.stringify({
    id: `${+new Date()}${Math.ceil(Math.random() * 10)}`,
    jsonrpc: '2.0',
    method,
    params,
  });

export const loadWalletICXParam = address => basebody('icx_getBalance', { address });

export const loadDepositedICXParam = address =>
  basebody('icx_call', {
    to: SCORE_ADDRESS,
    dataType: 'call',
    data: {
      method: 'balanceOf',
      params: {
        _address: address,
      },
    },
  });

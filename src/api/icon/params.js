import { SCORE_ADDRESS } from '../../common/consts';

const baseparam = (method, params) =>
  JSON.stringify({
    id: `${+new Date()}${Math.ceil(Math.random() * 10)}`,
    jsonrpc: '2.0',
    method,
    params,
  });

export const loadWalletICXParam = address => baseparam('icx_getBalance', { address });

export const loadDepositedICXParam = address =>
  baseparam('icx_call', {
    to: SCORE_ADDRESS,
    dataType: 'call',
    data: {
      method: 'balanceOf',
      params: {
        _address: address,
      },
    },
  });

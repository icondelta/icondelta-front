import { iconApi } from '../config';
import { loadWalletICXParam, loadDepositedICXParam } from './params';

export const loadWalletICX = address => {
  return iconApi.post('/v3', loadWalletICXParam(address));
};

export const loadDepositedICX = address => {
  return iconApi.post('/v3', loadDepositedICXParam(address));
};

export const loadICX = async address => {
  try {
    return {
      wallet: (await loadWalletICX(address)).data.result,
      deposited: (await loadDepositedICX(address)).data.result,
    };
  } catch (e) {
    throw Error(e.message);
  }
};

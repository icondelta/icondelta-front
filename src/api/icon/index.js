import { iconApi } from '../config';
import { loadWalletICXBody, loadDepositedICXBody } from './body';

export const loadWalletICX = address => {
  return iconApi.post('/v3', loadWalletICXBody(address));
};

export const loadDepositedICX = address => {
  return iconApi.post('/v3', loadDepositedICXBody(address));
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

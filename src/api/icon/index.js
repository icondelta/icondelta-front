import { iconApi } from '../config';
import { walletICXBody, depositedICXBody, walletTokenBody, depositedTokenBody } from './body';

const loadWalletICX = address => iconApi.post('/v3', walletICXBody(address));

const loadDepositedICX = address => iconApi.post('/v3', depositedICXBody(address));

const loadWalletToken = (address, tokenAddress) => iconApi.post('/v3', walletTokenBody(address, tokenAddress));

const loadDepositedToken = (address, tokenAddress) => iconApi.post('/v3', depositedTokenBody(address, tokenAddress));

export const loadICXBalance = async address => {
  try {
    const [wallet, deposited] = await Promise.all([loadWalletICX(address), loadDepositedICX(address)]);
    return {
      wallet: wallet.data.result,
      deposited: deposited.data.result,
    };
  } catch (e) {
    throw e;
  }
};

export const loadTokenBalance = async (address, tokenAddress) => {
  try {
    const [wallet, deposited] = await Promise.all([
      loadWalletToken(address, tokenAddress),
      loadDepositedToken(address, tokenAddress),
    ]);
    return {
      wallet: wallet.data.result,
      deposited: deposited.data.result,
    };
  } catch (e) {
    throw e;
  }
};

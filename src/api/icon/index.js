import { iconApi } from '../config';
import { walletICXBody, depositedICXBody, walletTokenBody, depositedTokenBody } from './body';

const loadWalletICX = (address) =>
  iconApi.post('/v3', walletICXBody(address)).then((res) => res.data.result);

const loadDepositedICX = (address) =>
  iconApi.post('/v3', depositedICXBody(address)).then((res) => res.data.result);

const loadWalletToken = (address, tokenAddress) =>
  iconApi.post('/v3', walletTokenBody(address, tokenAddress)).then((res) => res.data.result);

const loadDepositedToken = (address, tokenAddress) =>
  iconApi.post('/v3', depositedTokenBody(address, tokenAddress)).then((res) => res.data.result);

export const loadICXBalances = (address) => {
  return Promise.all([loadWalletICX(address), loadDepositedICX(address)]);
};

export const loadTokenBalances = async (address, tokenAddress) => {
  return Promise.all([
    loadWalletToken(address, tokenAddress),
    loadDepositedToken(address, tokenAddress),
  ]);
};

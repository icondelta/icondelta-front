import React, { createContext, useCallback, useContext, useState } from 'react';

import { loadICXBalances, loadTokenBalances } from '../api/icon';
import { loopToIcx } from '../utils/converter';

const WalletContext = createContext();

export const useWalletContext = () => useContext(WalletContext);

const initialBalance = {
  wallet: 0,
  deposited: 0,
};

export default ({ children }) => {
  const [address, setAddress] = useState();
  const [balance, setBalance] = useState({
    icx: initialBalance,
    token: initialBalance,
    loading: false,
  });

  const loadBalances = useCallback(
    (token) => {
      setBalance({
        ...balance,
        loading: true,
      });

      Promise.all([loadICXBalances(address), loadTokenBalances(address, token.address)])
        .then(([icx, token]) =>
          setBalance({
            icx: { wallet: loopToIcx(icx[0]), deposited: loopToIcx(icx[1]) },
            token: { wallet: loopToIcx(token[0]), deposited: loopToIcx(token[1]) },
            loading: false,
          }),
        )
        .catch((e) => {
          console.error(e);
          setBalance({
            ...balance,
            loading: false,
          });
        });
    },
    [address, balance],
  );

  return (
    <WalletContext.Provider value={{ address, setAddress, balance, loadBalances }}>
      {children}
    </WalletContext.Provider>
  );
};

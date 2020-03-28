import React, { createContext, useContext } from 'react';
import { useState } from 'react';

const BalanceContext = createContext();

export const useBalanceContext = () => useContext(BalanceContext);

const initialBalance = {
  wallet: 0,
  deposited: 0,
};

export default ({ children }) => {
  const [balance, setBalance] = useState({
    icx: initialBalance,
    token: initialBalance,
    loading: false,
  });

  return <BalanceContext.Provider value={{ balance, setBalance }}>{children}</BalanceContext.Provider>;
};

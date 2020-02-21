import React, { useState, useEffect, createContext } from 'react';
import { useParams } from 'react-router-dom';
import { getToken } from '../common/utils';
import { useContext } from 'react';

const TokenContext = createContext();

export const useTokenContext = () => useContext(TokenContext);

export default ({ children }) => {
  const { symbol } = useParams();
  const [token, setToken] = useState(getToken(symbol));

  useEffect(() => {
    const currToken = getToken(symbol);
    if (currToken && token !== currToken) {
      setToken({ ...currToken });
    }
    return () => {
      console.log('unmount TokenContext!');
    };
  }, [symbol]);

  return <TokenContext.Provider value={{ token, setToken }}>{children}</TokenContext.Provider>;
};

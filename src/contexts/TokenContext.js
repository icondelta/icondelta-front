import React, { createContext, useState, useMemo, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TOKENS } from '../common/consts';
import { getToken } from '../common/utils';
import { getFavorites } from '../common/favorites';

const TokenContext = createContext();

export const useTokenContext = () => useContext(TokenContext);

export default ({ children }) => {
  const { symbol } = useParams();
  const [token, setToken] = useState(getToken(symbol));
  const [tokens, setTokens] = useState(TOKENS);
  const [favorites, setFavorites] = useState(getFavorites());

  useEffect(() => {
    const currToken = getToken(symbol);
    if (currToken && token !== currToken) {
      setToken({ ...currToken });
    }
    return () => {
      console.log('Unmount TokenContext!');
    };
  }, [symbol]);

  const getTokens = useMemo(() => {
    tokens.map(token => {
      token.favorited = favorites[token.symbol];
      return token;
    });

    setTokens([...tokens]);
    return tokens;
  }, [favorites]);

  const getFavoritedTokens = useMemo(() => {
    return tokens.filter(token => favorites[token.symbol]);
  }, [favorites]);

  const addFavorites = currToken => {
    if (currToken.symbol === token.symbol) {
      setToken({ ...currToken });
    }
    setFavorites(_ => getFavorites());
  };

  return (
    <TokenContext.Provider value={{ token, favorites, addFavorites, getTokens, getFavoritedTokens }}>
      {children}
    </TokenContext.Provider>
  );
};

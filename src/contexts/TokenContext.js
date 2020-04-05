import React, { createContext, useState, useMemo, useContext, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { TOKENS } from '../commons/consts';
import { getToken } from '../commons/utils';
import { getFavorites } from '../commons/favorites';

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
    return tokens.map(token => {
      token.favorited = favorites[token.symbol];
      return token;
    });
  }, [favorites]);

  const getFavoritedTokens = useMemo(() => tokens.filter(token => favorites[token.symbol]), [favorites]);

  const addFavorites = useCallback(
    currToken => {
      if (currToken.symbol === token.symbol) {
        setToken({ ...currToken });
      }
      setFavorites(_ => getFavorites());
    },
    [token]
  );

  return (
    <TokenContext.Provider value={{ token, favorites, addFavorites, getTokens, getFavoritedTokens }}>
      {children}
    </TokenContext.Provider>
  );
};

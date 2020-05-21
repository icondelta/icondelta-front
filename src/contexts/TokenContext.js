import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TOKENS } from '../lib/consts';
import { getFavorites } from '../utils/favorites';

const TokenContext = createContext();

export const useTokenContext = () => useContext(TokenContext);

export const getToken = (symbol) => TOKENS.find((token) => token.symbol === symbol);

export default ({ children }) => {
  const { symbol } = useParams();
  const [token, setToken] = useState(getToken(symbol));
  const [tokens, _] = useState(TOKENS);
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
    return tokens.map((token) => {
      token.favorite = favorites[token.symbol];
      return token;
    });
  }, [favorites]);

  const getFavoritesTokens = useMemo(() => tokens.filter((token) => favorites[token.symbol]), [
    favorites,
  ]);

  const addFavorites = useCallback(
    (currToken) => {
      if (currToken.symbol === token.symbol) {
        setToken({ ...currToken });
      }
      setFavorites((_) => getFavorites());
    },
    [token]
  );

  return (
    <TokenContext.Provider
      value={{ token, favorites, addFavorites, getTokens, getFavoritesTokens }}
    >
      {children}
    </TokenContext.Provider>
  );
};

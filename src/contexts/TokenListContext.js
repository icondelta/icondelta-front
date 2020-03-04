import React, { createContext, useState, useMemo } from 'react';
import { useContext } from 'react';
import { TOKENS } from '../common/consts';
import { getFavorites } from '../common/favorites';

const TokenListContext = createContext();

export const useTokenListContext = () => useContext(TokenListContext);

export default ({ children }) => {
  const [tokens, _] = useState(TOKENS);
  const [favorites, setFavorites] = useState(getFavorites());

  const getTokens = useMemo(
    () =>
      tokens.map(token => {
        if (favorites[token.symbol]) {
          token.favorited = true;
        } else {
          token.favorited = false;
        }
        return token;
      }),
    [favorites]
  );

  return <TokenListContext.Provider value={{ setFavorites, getTokens }}>{children}</TokenListContext.Provider>;
};

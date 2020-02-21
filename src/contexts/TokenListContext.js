import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import { TOKENS } from '../common/consts';

const TokenListContext = createContext();

export const useTokenListContext = () => useContext(TokenListContext);

export default ({ children }) => {
  const [tokens, setTokens] = useState(TOKENS);

  return <TokenListContext.Provider value={{ tokens, setTokens }}>{children}</TokenListContext.Provider>;
};

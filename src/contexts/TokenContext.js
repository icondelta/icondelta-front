import React, { useState, createContext } from 'react';
import { TOKENS } from '../common/consts';

export const TokenContext = createContext();

export default ({ children }) => {
  const [tokens, setTokens] = useState(TOKENS);
  const [currToken, setCurrToken] = useState(TOKENS[0]);

  const changeTokens = tokens => setTokens(tokens);

  const changeCurrToken = token => setCurrToken(token);

  return (
    <TokenContext.Provider value={{ tokens, currToken, changeTokens, changeCurrToken }}>
      {children}
    </TokenContext.Provider>
  );
};

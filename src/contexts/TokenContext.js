import React, { useState, createContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { TOKENS } from '../common/consts';
import { findToken } from '../common/utils';

export const TokenContext = createContext();

export default ({ children, ...props }) => {
  const [currToken, setCurrToken] = useState(findToken(props.match.params.symbol));
  const [tokens, setTokens] = useState(TOKENS);
  const changeCurrToken = token => setCurrToken(token);
  const changeTokens = tokens => setTokens(tokens);

  useEffect(() => {
    const symbol = props.match.params.symbol;

    if (currToken && currToken.symbol !== symbol) {
      setCurrToken(findToken(symbol));
    }

    return () => {
      console.log('layout unmounted', props.match.params);
    };
  }, [currToken, props.match]);

  return !currToken ? (
    <Redirect to="/trade/AC3" />
  ) : (
    <TokenContext.Provider value={{ currToken, tokens, changeCurrToken, changeTokens }}>
      {children}
    </TokenContext.Provider>
  );
};

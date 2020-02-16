import React, { useEffect, useContext } from 'react';

import { TOKENS } from '../common/consts';
import { findToken } from '../common/utils';
import { TokenContext } from '../contexts/TokenContext';
import { Link } from 'react-router-dom';

const Trade = ({ history, location, match }) => {
  const { currToken, changeCurrToken } = useContext(TokenContext);

  useEffect(() => {
    const token = findToken(match.params.symbol);

    if (!token) {
      // replace unknown symbols to AC3
      history.replace('/trade/AC3');
    } else {
      if (currToken !== token) {
        changeCurrToken(token);
      }
    }
  }, [match, location, history, currToken, changeCurrToken]);

  return (
    <>
      <Link to={`/trade/${TOKENS[Math.ceil(Math.random() * (TOKENS.length - 1))].symbol}`}>
        <div className="card" style={{ width: '100%' }}>
          <div className="card__title">
            <h1 style={{ color: '#1763b6', margin: 0 }}>Hello</h1>
          </div>
          <div className="card__body">
            <p>icondelta</p>
          </div>
          <div className="card__footer">
            <span>...</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Trade;

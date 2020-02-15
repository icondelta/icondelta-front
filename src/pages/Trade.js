import React, { useEffect } from 'react';

import { findToken } from '../common/utils';

const Trade = ({ history, location, match }) => {
  useEffect(() => {
    const token = findToken(match.params.symbol);

    if (!token) {
      // replace unknown symbols to AC3
      history.replace('/trade/AC3');
    }
  }, [match, location, history]);

  return (
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
  );
};

export default Trade;

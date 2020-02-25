import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import TradeHistoryItem from './TradeHistoryItem';
import { tradeHistory } from '../../common/dummy';

const tradeHistoryHeader = css`
  margin: 8px;
  padding: 0 8px;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #e0e0e0;
  }
  li {
    display: inline-flex;
    padding: 8px 0;
    align-items: center;
    justify-content: center;

    &:first-of-type {
      flex: 1.6 0;
    }
    &:nth-of-type(2) {
      flex: 2 0;
    }
    &:last-of-type {
      flex: 1 0;
    }
  }
`;

const TradeHistory = () => {
  return (
    <div className="card ">
      <div css={[tradeHistoryHeader]}>
        <ul>
          <li>Time</li>
          <li>Price</li>
          <li>Amount</li>
        </ul>
      </div>
      <div className="inner_scroll">
        {tradeHistory.map(data => (
          <TradeHistoryItem key={data.txHash} data={data} />
        ))}
      </div>
    </div>
  );
};

export default TradeHistory;

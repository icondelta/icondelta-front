import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import TradeHistoryItem from './TradeHistoryItem';
import { tableHeader } from '../../styles/common';
import { tradeHistory } from '../../common/dummy';
import media from '../../common/media';

const tradeWrapper = css`
  ${media.up('sm')} {
    flex: 1 1;
  }
  ${media.down('sm')} {
    width: 100%;
  }
`;

const itemSize = css`
  div {
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
    <div className="card" css={[tradeWrapper]}>
      <div css={[tableHeader, itemSize]}>
        <div>TIME</div>
        <div>PRICE</div>
        <div>AMOUNT</div>
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

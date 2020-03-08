import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import media from '../../styles/media';
import TradeHistoryItem from './TradeHistoryItem';
import { tableHeader, headerSize } from '../../styles/common';
import { tradeHistory } from '../../common/dummy';

const tradeWrapper = css`
  ${media.up('sm')} {
    flex: 1;
  }
  ${media.down('sm')} {
    width: 100%;
  }
`;

const TradeHistory = () => {
  return (
    <div className="card" css={[tradeWrapper]}>
      <div css={[tableHeader, headerSize('1.6', '2', '1')]}>
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

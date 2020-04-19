import React from 'react';
import dayjs from 'dayjs';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const tradeItemWrapper = (type) => css`
  display: flex;
  line-height: 2;
  color: ${type === 'buy' ? '#e12343' : '#1763b6'};

  div {
    flex: 1;
    text-align: center;
  }
`;

const HistoryTradeItem = ({ data }) => {
  return (
    <div css={[tradeItemWrapper(data.type)]}>
      <div>{data.price}</div>
      <div>{data.amount}</div>
      <div>{data.total}</div>
      <div>{dayjs(data.orderedAt).format('hh:mm:ss')}</div>
    </div>
  );
};

export default HistoryTradeItem;

import React from 'react';
import dayjs from 'dayjs';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const orderItemWrapper = (type) => css`
  display: flex;
  line-height: 2;
  color: ${type === 'buy' ? '#e12343' : '#1763b6'};

  div {
    flex: 1;
    text-align: center;
  }
`;

const HistoryOrderItem = ({ data }) => {
  return (
    <div css={[orderItemWrapper(data.type)]}>
      <div>{data.price}</div>
      <div>{data.amountGet}</div>
      <div>{data.amountGive}</div>
      <div>{data.filled}</div>
      <div>{dayjs(data.orderedAt).format('hh:mm:ss')}</div>
    </div>
  );
};

export default HistoryOrderItem;

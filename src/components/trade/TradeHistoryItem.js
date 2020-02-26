import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import dayjs from 'dayjs';

const tradeHistoryWrapper = css`
  padding: 0 4px;
  line-height: 2;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:first-of-type {
      flex: 1.6 0;
      margin-left: 4px;
    }
    &:nth-of-type(2) {
      flex: 2 0;
    }
    &:last-of-type {
      flex: 1 0;
    }
  }
`;

const colorByType = type => css`
  li {
    color: ${type === 'buy' ? '#e12343' : '#1763b6'};
    background-color: ${type === 'buy' ? 'rgba(225, 35, 67, .05)' : 'rgba(23, 99, 182, .05)'};
  }
`;

const TradeListItem = ({ data }) => {
  return (
    <div css={[tradeHistoryWrapper, colorByType(data.type)]}>
      <ul>
        <li>{dayjs(data.tradedAt).format('hh:mm:ss')}</li>
        <li>{data.price}</li>
        <li>{data.amount}</li>
      </ul>
    </div>
  );
};

export default TradeListItem;

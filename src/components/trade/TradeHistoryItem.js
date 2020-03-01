import React from 'react';
import dayjs from 'dayjs';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { tableBody } from '../../styles/common';

const bodyItems = type => css`
  div {
    color: ${type === 'buy' ? '#e12343' : '#1763b6'};
    background-color: ${type === 'buy' ? 'rgba(225, 35, 67, .05)' : 'rgba(23, 99, 182, .05)'};

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

const TradeListItem = ({ data }) => {
  return (
    <div css={[tableBody, bodyItems(data.type)]}>
      <div>{dayjs(data.tradedAt).format('hh:mm:ss')}</div>
      <div>{data.price}</div>
      <div>{data.amount}</div>
    </div>
  );
};

export default TradeListItem;

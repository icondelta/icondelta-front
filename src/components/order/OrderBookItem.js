import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { tableBody } from '../../styles/common';

const bodyItems = type => css`
  div {
    flex: 1 0;
    cursor: pointer;
    font-size: 1rem;
    line-height: 2.5;
    color: ${type === 'buy' ? '#e12343' : '#1763b6'};

    &:first-of-type {
      font-weight: bold;
      background-color: ${type === 'buy' ? '#fff7f9' : '#f7fbff'};
    }
  }
`;

const OrderBookItem = ({ data }) => {
  return (
    <div css={[tableBody, bodyItems(data.type)]}>
      <div>{data.price}</div>
      <div>{data.amountGet}</div>
      <div>{data.amountGive}</div>
    </div>
  );
};

export default OrderBookItem;

import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const orderBookItemWrapper = css`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    cursor: pointer;
    line-height: 2.5;
    font-size: 1.2rem;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:first-of-type {
      flex: 1 0;
    }
    &:nth-of-type(2) {
      flex: 1 0;
    }
    &:last-of-type {
      flex: 1 0;
    }
  }
`;

const colorByType = type => css`
  color: ${type === 'buy' ? '#e12343' : '#1763b6'};
  li:first-of-type {
    background-color: ${type === 'buy' ? '#fff7f9' : '#f7fbff'};
  }
`;

const OrderBookItem = ({ data }) => {
  return (
    <ul css={[orderBookItemWrapper, colorByType(data.type)]}>
      <li>{data.price}</li>
      <li>{data.amountGet}</li>
      <li>{data.amountGive}</li>
    </ul>
  );
};

export default OrderBookItem;

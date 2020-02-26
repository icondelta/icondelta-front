import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useTokenContext } from '../../contexts/TokenContext';
import OrderBook from './OrderBook';

const orderBookHeader = css`
  margin: 8px 8px 0;

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

const Order = () => {
  const { token } = useTokenContext();

  return (
    <div className="card">
      <div css={[orderBookHeader]}>
        <ul>
          <li>PRICE</li>
          <li>{token.symbol}</li>
          <li>ICX</li>
        </ul>
      </div>
      <div className="inner_scroll">
        <OrderBook type="sell" />
        <OrderBook type="buy" />
      </div>
    </div>
  );
};

export default Order;

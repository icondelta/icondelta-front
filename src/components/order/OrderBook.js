import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import OrderBookItem from './OrderBookItem';
import { buyOrders, sellOrders } from '../../common/dummy';

const orderBookWrapper = css`
  padding: 0 4px;

  &:first-of-type {
    padding-top: 4px;
  }
  &:last-of-type {
    padding-bottom: 4px;
  }
`;

const OrderBook = ({ type }) => {
  const orders = type === 'buy' ? buyOrders : sellOrders;
  return (
    <div css={[orderBookWrapper]}>
      {orders.map(order => (
        <OrderBookItem key={order.signature} data={order} />
      ))}
    </div>
  );
};

export default OrderBook;

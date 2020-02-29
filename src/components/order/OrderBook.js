import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import OrderBookItem from './OrderBookItem';
import { buyOrders, sellOrders } from '../../common/dummy';

const orderBookWrapper = css`
  padding: 0 4px 0 8px;
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

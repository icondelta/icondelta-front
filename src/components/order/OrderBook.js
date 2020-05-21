import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import media from '../../styles/media';
import OrderBookItem from './OrderBookItem';
import { useTokenContext } from '../../contexts/TokenContext';
import { tableHeader, headerSize } from '../../styles/common';
import { buyOrders, sellOrders } from '../../lib/dummy';

const orderWrapper = css`
  margin: 16px 16px 0;
  ${media.up('sm')} {
    flex: 1.4;
  }
  ${media.down('sm')} {
    margin: 0;
    width: 100%;
  }
`;

const OrderBook = () => {
  const { token } = useTokenContext();

  return (
    <div className="card" css={[orderWrapper]}>
      <div css={[tableHeader, headerSize(1, 1, 1)]}>
        <div>PRICE</div>
        <div>{token.symbol}</div>
        <div>ICX</div>
      </div>
      <div className="inner_scroll">
        {sellOrders.map((order) => (
          <OrderBookItem key={order.signature} data={order} />
        ))}
        {buyOrders.map((order) => (
          <OrderBookItem key={order.signature} data={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderBook;

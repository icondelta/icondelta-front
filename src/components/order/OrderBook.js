import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { useTokenContext } from '../../contexts/TokenContext';
import OrderBookItem from './OrderBookItem';
import media from '../../common/media';
import { tableHeader } from '../../styles/common';
import { buyOrders, sellOrders } from '../../common/dummy';

const orderWrapper = css`
  ${media.up('sm')} {
    margin: 16px 16px 0;
    flex: 1.4 1;
  }
  ${media.down('sm')} {
    width: 100%;
  }
`;

const headerSize = css`
  div {
    flex: 1 0;
  }
`;

const OrderBook = () => {
  const { token } = useTokenContext();

  return (
    <div className="card" css={[orderWrapper]}>
      <div css={[tableHeader, headerSize]}>
        <div>PRICE</div>
        <div>{token.symbol}</div>
        <div>ICX</div>
      </div>
      <div className="inner_scroll">
        {buyOrders.map(order => (
          <OrderBookItem key={order.signature} data={order} />
        ))}
        {sellOrders.map(order => (
          <OrderBookItem key={order.signature} data={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderBook;

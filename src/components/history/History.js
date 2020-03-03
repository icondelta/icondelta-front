import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import media from '../../common/media';
import { menuHeader } from '../../styles/common';
import HistoryOrderItem from './HistoryOrderItem';
import HistoryTradeItem from './HistoryTradeItem';
import { history } from '../../common/dummy';
import HistoryHeader from './HistoryHeader';

const historyWrapper = css`
  height: 15rem;
  margin: 16px 0 0 calc(25% + 16px);
  border-top: none;
  width: calc(75% - 16px);
  background-color: transparent;
  ${media.down('lg')} {
    width: 100%;
    margin: 16px 0 0;
  }
  ${media.down('sm')} {
    margin: 8px 0 0;
  }
`;

const activeStyle = active => css`
  & div {
    &:first-of-type {
      border-right: 1px solid #e4e5e8;
    }
    &:last-of-type {
      border-left: 1px solid #e4e5e8;
    }
  }
  & div:nth-of-type(${active}) {
    color: #1aaaba;
    background: #fff;
  }
`;

const History = () => {
  const [type, setType] = useState('order');

  const changeType = ({ target }) => {
    if (type !== target.className) {
      setType(target.className);
    }
  };

  return (
    <div className="card" css={[historyWrapper]}>
      <div css={[menuHeader('div'), activeStyle(type === 'order' ? 1 : 2)]} onClick={changeType}>
        <div className="order">Active Orders</div>
        <div className="trade">Trade History</div>
      </div>
      <HistoryHeader type={type} />
      <div className="inner_scroll">
        {type === 'order'
          ? history.order.map(order => <HistoryOrderItem key={order.signature} data={order} />)
          : history.trade.map(trade => <HistoryTradeItem key={trade.txHash} data={trade} />)}
      </div>
    </div>
  );
};

export default History;

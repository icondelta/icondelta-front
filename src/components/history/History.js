import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { menuHeader } from '../../styles/common';
import media from '../../common/media';

const historyWrapper = css`
  flex: 1;
  border-top: none;
  background-color: transparent;

  ${media.up('sm')} {
    margin-top: 16px;
  }

  ${media.down('sm')} {
    margin-top: 8px;
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
    </div>
  );
};

export default History;

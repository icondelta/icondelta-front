import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import media from '../../styles/media';
import { useTokenContext } from '../../contexts/TokenContext';

const balanceInfoWrapper = css`
  flex: 1;
  margin-left: 16px;
  ${media.down('sm')} {
    margin: 8px 0 0;
  }

  .card__title {
    color: #1aaaba;
    padding: 8px 16px;
    border-bottom: 1px solid #e0e0e0;
  }
  .card__body {
    padding-top: 0;
  }
`;

const balanceInfoBody = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  div {
    flex: 1;
    display: flex;
    span {
      justify-content: flex-end;
    }
    &:first-of-type {
      span {
        justify-content: center;
      }
    }
  }
  span {
    flex: 2.5;
    display: inline-flex;
    align-items: center;
    padding: 4px 8px;
    ${media.down('lg')} {
      padding: 4px 0;
    }
    &:first-of-type {
      flex: 1;
    }
  }
`;

const BalanceInfo = () => {
  const { token } = useTokenContext();
  return (
    <div className="card" css={[balanceInfoWrapper]}>
      <div className="card__title">BALANCES</div>
      <div className="card__body" css={[balanceInfoBody]}>
        <div>
          <span></span>
          <span>WALLET</span>
          <span>DEPOSITED</span>
        </div>
        <div>
          <span>ICX:</span>
          <span>0</span>
          <span>0</span>
        </div>
        <div>
          <span>{token.symbol}:</span>
          <span>0</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default BalanceInfo;

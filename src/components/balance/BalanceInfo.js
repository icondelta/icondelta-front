import React, { useEffect } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Overlay from '../common/Overlay';
import media from '../../styles/media';
import { useTokenContext } from '../../contexts/TokenContext';
import { useWalletContext } from '../../contexts/WalletContext';
import { ReactComponent as RefreshIcon } from '../../assets/repeat.svg';
import { ReactComponent as LoadingIcon } from '../../assets/loader.svg';

const balanceInfoWrapper = css`
  flex: 1;
  margin-left: 16px;
  ${media.down('sm')} {
    margin: 8px 0 0;
  }

  .card__title {
    color: #1aaaba;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e0e0e0;

    span {
      display: flex;
    }

    svg {
      cursor: pointer;
      user-select: none;
      width: 1rem;
      height: 1rem;
    }
  }
`;

const balanceInfoBody = (loading) => css`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;

  div {
    flex: 1;
    display: flex;
    color: ${loading ? '#ebebeb' : 'inherit'};

    &:first-of-type {
      span {
        justify-content: center;
      }
    }
    span {
      flex: 2.5;
      padding: 4px;
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      &:first-of-type {
        flex: 1;
      }
    }
  }
`;

const overlay = css`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  svg {
    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.67);
    animation: spin 2.5s infinite linear;
  }
`;

const BalanceInfo = () => {
  const { token } = useTokenContext();
  const { address, balance, loadBalances } = useWalletContext();

  useEffect(() => {
    if (address) {
      loadBalances(token);
    }
  }, [address, token]);

  const handleRefresh = () => {
    if (address && !balance.loading) {
      loadBalances(token);
    }
  };

  return (
    <div className="card" css={[balanceInfoWrapper]}>
      <div className="card__title">
        <span>BALANCES</span>
        <span>
          <RefreshIcon onClick={handleRefresh} />
        </span>
      </div>
      <div className="card__body" css={[balanceInfoBody(balance.loading)]}>
        <div>
          <span />
          <span>WALLET</span>
          <span>DEPOSITED</span>
        </div>
        <div>
          <span>ICX:</span>
          <span>{balance.icx.wallet}</span>
          <span>{balance.icx.deposited}</span>
        </div>
        <div>
          <span>{token.symbol}:</span>
          <span>{balance.token.wallet}</span>
          <span>{balance.token.deposited}</span>
        </div>
        {balance.loading && (
          <Overlay style={[overlay]}>
            <LoadingIcon />
          </Overlay>
        )}
      </div>
    </div>
  );
};

export default BalanceInfo;

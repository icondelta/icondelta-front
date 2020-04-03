import React, { useEffect, useCallback } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import media from '../../styles/media';
import { ReactComponent as RefreshIcon } from '../../assets/repeat.svg';
import { useTokenContext } from '../../contexts/TokenContext';
import { useBalanceContext } from '../../contexts/BalanceContext';
import { loadICXBalances, loadTokenBalances } from '../../api/icon';
import { loopToIcx } from "../../common/converter";

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
  const { balance, setBalance } = useBalanceContext();

  // TODO: Add address parameter in loadBalances function
  useEffect(() => {
    loadBalances();
  }, [token]);

  const handleRefresh = () => {
    if (!balance.loading) {
      loadBalances();
    }
  };

  const loadBalances = useCallback(address => {
    if (address) {
      setBalance({
        icx: { wallet: 0, deposited: 0 },
        token: { wallet: 0, deposited: 0 },
        loading: true,
      });

      Promise.all([loadICXBalances(address), loadTokenBalances(address, token.address)])
        .then(([icx, token]) =>
          setBalance({
            icx: { wallet: loopToIcx(icx[0]), deposited: loopToIcx(icx[1]) },
            token: { wallet: loopToIcx(token[0]), deposited: loopToIcx(token[1]) },
            loading: false,
          })
        )
        .catch(e => {
          console.error(e);
          setBalance({
            ...balance,
            loading: false,
          });
        });
    }
  }, []);

  return (
    <div className="card" css={[balanceInfoWrapper]}>
      <div className="card__title">
        <span>BALANCES</span>
        <span>
          <RefreshIcon onClick={handleRefresh} />
        </span>
      </div>
      <div className="card__body" css={[balanceInfoBody]}>
        <div>
          <span></span>
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
      </div>
    </div>
  );
};

export default BalanceInfo;

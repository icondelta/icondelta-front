import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import BalanceForm from './TokenBalanceForm';
import { useTokenContext } from '../../contexts/TokenContext';
import media from '../../common/media';

const balance = css`
  width: calc(72% - 16px);
  ${media.down('lg')} {
    width: 100%;
  }
`;

const tokenInfo = css`
  flex: 1 0;
  .symbol {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .name {
    color: #bdbdbd;
    margin-left: 0.5rem;
  }
`;

const tokenPrice = css`
  margin: 8px 0 0;
  color: #1aaaba;
  font-size: 2rem;
`;

const Balance = () => {
  const { token } = useTokenContext();

  return (
    <div className="card" css={[balance]}>
      <div className="card__title">
        <div css={[tokenInfo]}>
          <span className="symbol">{token?.symbol || ''}</span>
          <span className="name">{token?.name || ''}</span>
          <p css={[tokenPrice]}>{token?.lastPrice || '-'}</p>
        </div>
      </div>
      <div className="card__body">
        <BalanceForm token={token} />
      </div>
    </div>
  );
};

export default Balance;

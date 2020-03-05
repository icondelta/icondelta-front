import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import media from '../../common/media';
import StarIcon from '../common/StarIcon';
import { toggleFavorite } from '../../common/favorites';
import { useTokenContext } from '../../contexts/TokenContext';
import { useTokenListContext } from '../../contexts/TokenListContext';

const tokenInfoWrapper = css`
  width: calc(75% - 16px);
  ${media.up('lg')} {
    margin-left: 16px;
  }
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
  margin: 0;
  font-size: 2rem;
`;

const tokenInfoFooter = css`
  span {
    display: inline-flex;
    padding: 4px;
  }
  svg {
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
  }
`;

const TokenInfo = () => {
  const { token } = useTokenContext();
  const { setFavorites } = useTokenListContext();

  return (
    <div className="card" css={[tokenInfoWrapper]}>
      <div className="card__title">
        <div css={[tokenInfo]}>
          <span className="symbol">{token.symbol || ''}</span>
          <span className="name">{token.name || ''}</span>
        </div>
      </div>
      <div className="card__body">
        <p css={[tokenPrice]}>{token.lastPrice || '-'}</p>
      </div>
      <div className="card__footer" css={[tokenInfoFooter]}>
        <span onClick={toggleFavorite(token, setFavorites)}>
          <StarIcon fill={token.favorited} />
        </span>
      </div>
    </div>
  );
};

export default TokenInfo;

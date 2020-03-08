import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import media from '../../styles/media';
import StarIcon from '../common/StarIcon';
import { toggleFavorite } from '../../common/favorites';
import { useTokenContext } from '../../contexts/TokenContext';

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
    padding: 4px;
    cursor: pointer;
    user-select: none;
    display: inline-flex;
  }
  svg {
    width: 1.2rem;
    height: 1.2rem;
    transition: fill ease 0.25s;
  }
`;

const TokenInfo = () => {
  const { token, addFavorites } = useTokenContext();

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
        <span onClick={toggleFavorite(token, addFavorites)}>
          <StarIcon fill={token.favorited} />
        </span>
      </div>
    </div>
  );
};

export default TokenInfo;

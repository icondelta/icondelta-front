import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link, useParams } from 'react-router-dom';

import { toggleFavorite } from '../../commons/favorites';
import { useTokenContext } from '../../contexts/TokenContext';
import StarIcon from '../common/StarIcon';
import media from '../../styles/media';

const tokenListItem = css`
  color: inherit;
  display: flex;
  padding: 0 16px;
  border-radius: 4px;
  text-decoration: none;
  border: 2px solid transparent;

  &.active {
    border: 2px solid #1aaaba;
  }

  & > div {
    flex: 1;
    display: flex;
    align-items: center;
  }
  ${media.up('sm')} {
    &:hover {
      & > div p span {
        transform: translateX(4px);
      }
      & svg {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  & div > span {
    padding: 16px 0;
    display: inline-flex;
    align-items: center;
    justify-content: start;

    &:nth-of-type(1) {
      flex: none;
      width: 84px;
      display: flex;
    }
    &:first-of-type {
      flex: 1 0 auto;
    }
    &:last-of-type {
      flex: 1 1 auto;
      justify-content: flex-end;
    }
  }
`;

const withSVG = css`
  flex: none;
  width: 84px;
  margin: 0;
  padding: 8px 0;
  display: flex;
  align-items: center;

  svg {
    opacity: 0;
    padding: 4px;
    cursor: pointer;
  }
  span {
    font-weight: bold;
  }
  svg,
  span {
    transform: translateX(-16px);
    transition: all ease 0.25s;
  }
`;

const TokenListItem = ({ token, onClick }) => {
  const { symbol } = useParams();
  const { addFavorites } = useTokenContext();

  return (
    <Link
      to={`/${token.symbol}`}
      className={symbol === token.symbol ? 'active' : ''}
      css={[tokenListItem]}
      onClick={onClick}
      replace={symbol === token.symbol}
    >
      <div>
        <p css={[withSVG]}>
          <StarIcon onClick={toggleFavorite(token, addFavorites)} fill={token.favorite} />
          <span>{token.symbol}</span>
        </p>
        <span>{token.name}</span>
        <span>{token.lastPrice || '-'}</span>
      </div>
    </Link>
  );
};

export default TokenListItem;

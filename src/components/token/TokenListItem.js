import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

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

  ul {
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    justify-content: space-between;
  }

  li {
    width: 100%;
    display: flex;
  }

  span {
    cursor: pointer;
    padding: 14px 8px;
    font-size: 1.2em;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  span:nth-of-type(1) {
    width: 25%;
    color: #414141;
    font-weight: 700;
  }

  span:nth-of-type(2) {
    width: 55%;
    color: #676767;
  }

  span:nth-of-type(3) {
    width: 30%;
  }
`;

const TokenListItem = ({ token }) => {
  return (
    <Link to={`/${token.symbol}`} css={[tokenListItem]}>
      <ul>
        <li>
          <span>{token.symbol}</span>
          <span>{token.name}</span>
          <span>{token.lastPrice || '-'}</span>
        </li>
      </ul>
    </Link>
  );
};

export default TokenListItem;

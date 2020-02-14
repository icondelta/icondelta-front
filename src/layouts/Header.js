import React from 'react';
import { Link } from 'react-router-dom';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const nav = css`
  display: flex;
  height: 60px;
  padding: 0 16px;

  & div {
    padding: 0 12px;
    cursor: pointer;
    align-items: center;
    display: inline-flex;

    &.title {
      font-size: 1.5rem;
      font-weight: bold;
      text-transform: uppercase;
    }

    & a {
      color: #000;
      text-decoration: none;
    }
  }
`;

const Header = () => {
  return (
    <header>
      <nav css={nav}>
        <div className="title">
          <Link to="/">icondelta</Link>
        </div>
        <div>
          <Link to="/trade">Trade</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

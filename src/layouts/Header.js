import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { TokenContext } from '../contexts/TokenContext';

const nav = css`
  height: 100%;
  display: flex;

  a {
    color: #000;
    height: 100%;
    font-weight: 700;
    margin-right: 1em;
    align-items: center;
    display: inline-flex;
    text-decoration: none;
    &.title {
      font-size: 1.5rem;
      text-transform: uppercase;

      @media (max-width: 1199.98px) {
        font-size: 0;
      }
    }
  }

  i.icon {
    color: #1aaaba;
    font-size: 2rem;
    margin-right: 0.5rem;
    animation: spin 1.5s infinite linear;
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }

  .subtitle {
    font-size: 0;

    @media (max-width: 1199.98px) {
      font-size: 1.2rem;
      font-weight: bold;
      align-items: center;
      display: inline-flex;
    }

    p {
      margin: 0;
      margin-left: 0.5rem;
    }
  }
`;

const Header = () => {
  const { currToken: token } = useContext(TokenContext);

  return (
    <header>
      <nav css={nav}>
        <div>
          <Link to="/" className="title">
            <i className="material-icons icon">autorenew</i>
            icondelta
          </Link>
        </div>
        <div className="subtitle">
          <p>{`${token.symbol} ${token.name}`}</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;

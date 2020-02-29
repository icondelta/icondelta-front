import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useTokenContext } from '../contexts/TokenContext';
import { useUiContext } from '../contexts/UiContext';
import media from '../common/media';

const header = css`
  height: 60px;
  background: #fff;
  box-shadow: 0 3px 10px 0 rgba(66, 66, 66, 0.05);
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    padding: 0 16px;
    max-width: 1440px;
  }
  span {
    color: #1aaaba;
    height: 100%;
    font-weight: 700;
    font-size: 1.5rem;
    margin-right: 1rem;
    align-items: center;
    display: inline-flex;
    text-decoration: none;
    .icon {
      color: #1aaaba;
      font-size: 2rem;
      margin-right: 0.5rem;
      animation: spin 1.5s infinite linear;
    }
  }
  .title {
    margin-right: 1em;
    text-transform: uppercase;
  }
  .subtitle {
    cursor: pointer;
    font-size: 0;
    p {
      color: #1aaaba;
      margin: 0;
      display: flex;
      align-items: center;
    }
    i {
      display: none;
    }
  }

  ${media.down('lg')} {
    height: 50px;
    margin: 0;
    width: 100%;
    padding: 0 8px;
    nav {
      padding: 0 8px;
    }
    .title {
      font-size: 0;
    }
    .subtitle {
      font-size: 1.2rem;
      font-weight: bold;
      align-items: center;
      display: inline-flex;
      
      i {
        display: inline-block;
        font-size: 1rem;
        font-weight: bold;
        margin-left: 4px;
        transition: transform ease 0.3s;
      }
    }
  }
  
  ${media.down('md')} {
    padding: 0;
  }
`;

const menuArrow = visible => css`
  i {
    transform: rotate(${visible ? '180deg' : 0});
  }
`;

const Header = () => {
  const { menuVisible, toggleMenuVisible } = useUiContext();
  const { token } = useTokenContext();

  return (
    <header css={[header]}>
      <nav>
        <div>
          <span className="title">
            <i className="material-icons icon">autorenew</i>
            icondelta
          </span>
        </div>
        <div className="subtitle" onClick={toggleMenuVisible}>
          <p css={[menuArrow(menuVisible)]}>
            {`${token?.symbol || ''} ${token?.name || ''}`}
            <i className="material-icons">keyboard_arrow_down</i>
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;

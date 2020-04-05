import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import media from '../styles/media';
import { useTokenContext } from '../contexts/TokenContext';
import { useUiContext } from '../contexts/UiContext';
import { ReactComponent as HelpIcon } from '../assets/help-circle.svg';

const header = css`
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #e4e5e8;
  box-shadow: 0 3px 10px 0 rgba(66, 66, 66, 0.05);
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    padding: 0 16px;
    max-width: 1440px;
    justify-content: space-between;

    & > div {
      display: flex;
    }
  }
  span {
    color: #1aaaba;
    height: 100%;
    font-weight: 700;
    font-size: 1.5rem;
    margin-right: 1rem;
    margin-bottom: auto;
    align-items: center;
    display: inline-flex;
    text-decoration: none;
    .material-icons {
      color: #1aaaba;
      font-size: 2rem;
      margin-right: 0.5rem;
      animation: spin 1.5s infinite linear;
    }
  }
  .title {
    cursor: default;
    user-select: none;
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

const rightMenu = css`
  a {
    outline: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    ${media.down('sm')} {
      font-size: 0;
    }
  }
  svg {
    width: 16px;
    height: 16px;
    margin: 0 4px;
    stroke-width: 2;
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
            <i className="material-icons">autorenew</i>
            icondelta
          </span>
          <div className="subtitle" onClick={toggleMenuVisible}>
            <p css={[menuArrow(menuVisible)]}>
              {`${token?.symbol} ${token?.name}`}
              <i className="material-icons">keyboard_arrow_down</i>
            </p>
          </div>
        </div>
        <div css={[rightMenu]}>
          <a href="https://www.notion.so/How-to-Guide-5bc85e598dba4cb599b365d0b95f82d4" target="_blank">
            <HelpIcon />
            How can i use?
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

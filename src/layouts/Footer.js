import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import media from '../styles/media';
import { ReactComponent as GithubIcon } from '../assets/github.svg';

const footer = css`
  width: 100%;
  padding: 40px 16px;
  margin: 0 auto;
  color: #676767;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.down('lg')} {
    margin: 0;
    width: 100%;
    padding: 8px 16px;
  }
  ${media.down('md')} {
    padding: 8px;
    margin-top: 2rem;
    align-items: flex-end;
    flex-direction: column;
    & > * {
      padding-top: 0.5rem;
    }
  }

  a {
    color: #414141;
    text-decoration: none;
  }
  svg {
    width: 20px;
    height: 20px;
    fill: none;
    stroke-width: 2;
    stroke: currentColor;
    vertical-align: middle;
  }
`;

const Footer = () => {
  return (
    <footer css={footer}>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/icondelta/icondelta-front">
          <GithubIcon />
        </a>
      </div>
      <div>Copyright &copy; icondelta, Inc. All rights reserved.</div>
    </footer>
  );
};

export default Footer;

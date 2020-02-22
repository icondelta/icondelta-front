import React, { useState, useMemo, memo } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import media from '../../common/media';
import TokenListItem from './TokenListItem';
import TokenSearchBar from './TokenSearchBar';
import { useTokenListContext } from '../../contexts/TokenListContext';
import { useCallback } from 'react';
import { useUiContext } from '../../contexts/UiContext';

const tokenList = css`
  top: 8px;
  width: 28%;
  position: sticky;
  height: 650px;
  max-height: 650px;
  float: right;

  .card__body {
    display: flex;
    height: 100%;
    padding: 8px 0;
    overflow: hidden;

    p {
      display: flex;
      margin: 0;
      padding: 16px;
      height: 100%;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  ${media.down('lg')} {
    top: 58px;
    width: 28%;
    min-width: 300px;
    z-index: 100;
    float: none;
    position: absolute;
    overflow: hidden;
    max-height: 80%;
  }

  ${media.down('md')} {
    width: 35%;
    max-height: 70%;
  }
`;

const overlay = visible => css`
  top: 0;
  left: 0;
  z-index: 99;
  position: absolute;

  ${media.down('lg')} {
    ${visible
      ? css`
          width: 100%;
          height: 100%;
        `
      : css`
          width: 0;
          height: 0;
        `}
  }
`;

const TokenList = () => {
  const [searchText, setSearchText] = useState('');
  const { tokens } = useTokenListContext();
  const { menuVisible, toggleMenuVisible } = useUiContext();

  const handleTextChange = useCallback(e => {
    setSearchText(e.target.value);
  }, []);

  const tokensByText = useMemo(() => {
    if (!searchText || !searchText.trim()) {
      return tokens;
    }
    return tokens.filter(({ symbol, name }) => new RegExp(searchText, 'i').test(`${symbol}, ${name}`));
  }, [searchText]);

  const listVisible = useMemo(
    () => css`
      ${media.down('lg')} {
        display: ${menuVisible ? 'flex' : 'none'};
      }
    `,
    [menuVisible]
  );

  return (
    <>
      <div className="card" css={[tokenList, listVisible]}>
        <div className="card__title">
          <TokenSearchBar text={searchText} handleTextChange={handleTextChange} />
        </div>
        <div className="card__body">
          <div className="inner_scroll">
            {tokensByText.length ? (
              tokensByText.map(token => <TokenListItem key={token.address} token={token} />)
            ) : (
              <p>No results found.</p>
            )}
          </div>
        </div>
        <div className="card__footer"></div>
      </div>
      <div css={[overlay(menuVisible)]} onClick={toggleMenuVisible}></div>
    </>
  );
};

export default TokenList;

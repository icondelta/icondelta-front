import React, { useState, useMemo, useCallback } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import media from '../../common/media';
import TokenListItem from './TokenListItem';
import TokenSearchBar from './TokenSearchBar';
import { useUiContext } from '../../contexts/UiContext';
import { useTokenListContext } from '../../contexts/TokenListContext';

const tokenList = css`
  top: 8px;
  position: sticky;
  max-height: 750px;
  float: left;

  width: 28%;
  height: 650px;
  ${media.down('lg')} {
    top: 54px;
    min-width: 300px;
    z-index: 100;
    float: none;
    position: absolute;
    overflow: hidden;
    max-height: 80%;
  }
  ${media.down('md')} {
    width: 40%;
    max-height: 75%;
  }
  ${media.down('sm')} {
    left: 0;
    margin: 0 4px;
    height: 100%;
    width: calc(100% - 8px);
  }

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
    // eslint-disable-next-line
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
              tokensByText.map(token => <TokenListItem key={token.address} token={token} onClick={toggleMenuVisible} />)
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

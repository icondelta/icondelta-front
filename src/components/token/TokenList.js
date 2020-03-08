import React, { useState, useMemo, useCallback } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import media from '../../styles/media';
import TokenListItem from './TokenListItem';
import TokenSearchBar from './TokenSearchBar';
import { useUiContext } from '../../contexts/UiContext';
import { useTokenContext } from '../../contexts/TokenContext';
import StarIcon from '../common/StarIcon';

const tokenListWrapper = css`
  top: 8px;
  width: 25%;
  height: 650px;
  float: left;
  position: sticky;
  max-height: 750px;

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

  .card__title {
    display: flex;
    margin: 0 16px;
    padding: 16px 0 0;
    border-bottom: 1px solid #e0e0e0;
  }

  .card__body {
    display: flex;
    height: 100%;
    padding: 8px 0;
    overflow: hidden;
  }
`;

const noResult = css`
  display: flex;
  margin: 0;
  padding: 16px;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
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

const onlyFavoriteIconWrapper = css`
  padding: 0;
  margin: 16px 8px 24px 0;
  display: inline-flex;
  align-items: center;

  svg {
    cursor: pointer;
    user-select: none;
    width: 20px;
    height: 20px;
    transition: fill ease 0.25s;
  }
`;

const listVisible = visible => css`
  ${media.down('lg')} {
    display: ${visible ? 'flex' : 'none'};
  }
`;

const TokenList = () => {
  const [onlyFavorite, setOnlyFavorite] = useState(false);
  const [searchText, setSearchText] = useState('');
  const { favorites, getTokens, getFavoritedTokens } = useTokenContext();
  const { menuVisible, toggleMenuVisible } = useUiContext();

  const handleTextChange = useCallback(e => {
    setSearchText(e.target.value);
  }, []);

  const toggleOnlyFavorite = () => {
    setOnlyFavorite(prev => !prev);
  };

  const tokensByCondition = useMemo(() => {
    if (onlyFavorite) {
      if (!searchText) {
        return getFavoritedTokens;
      } else {
        return getFavoritedTokens.filter(({ symbol, name }) => new RegExp(searchText, 'i').test(`${symbol}, ${name}`));
      }
    }

    if (!searchText) {
      return getTokens;
    }
    return getTokens.filter(({ symbol, name }) => new RegExp(searchText, 'i').test(`${symbol}, ${name}`));
  }, [searchText, favorites, onlyFavorite]);

  return (
    <>
      <div className="card" css={[tokenListWrapper, listVisible(menuVisible)]}>
        <div className="card__title">
          <span css={[onlyFavoriteIconWrapper]}>
            <StarIcon fill={onlyFavorite} onClick={toggleOnlyFavorite} />
          </span>
          <TokenSearchBar text={searchText} handleTextChange={handleTextChange} />
        </div>
        <div className="card__body">
          <div className="inner_scroll">
            {tokensByCondition.length ? (
              tokensByCondition.map(token => (
                <TokenListItem key={token.address} token={token} onClick={toggleMenuVisible} />
              ))
            ) : (
              <p css={[noResult]}>No results found.</p>
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

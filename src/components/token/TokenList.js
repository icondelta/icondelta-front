import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import media from '../../common/media';
import TokenListItem from './TokenListItem';
import { useTokenListContext } from '../../contexts/TokenListContext';

const tokenList = css`
  width: 28%;
  float: right;
  position: sticky;
  .card__body {
    padding: 8px 0;
  }
  ${media.down('lg')} {
    display: none;
    width: 80%;
  }
  ${media.down('md')} {
    width: 100%;
  }
`;

const TokenList = () => {
  const { tokens } = useTokenListContext();
  return (
    <div className="card" css={[tokenList]}>
      <div className="card__title"></div>
      <div>
        {tokens.map(token => (
          <TokenListItem key={token.address} token={token} />
        ))}
      </div>
      <div className="card__footer"></div>
    </div>
  );
};

export default TokenList;

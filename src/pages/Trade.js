import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Layout from '../layouts/Layout';
import TokenList from '../components/token/TokenList';
import TokenBalance from '../components/token/TokenBalance';
import TradeList from '../components/trade/TradeList';
import media from '../common/media';

const wrapper = css`
  display: flex;
  width: calc(72% - 16px);
  margin-top: 16px;

  ${media.down('lg')} {
    width: 100%;
  }

  div {
    height: 80vh;
    &:first-of-type {
      margin-right: 8px;
      flex: 1 1 auto;
    }
    &:nth-of-type(2) {
      margin: 0 8px;
      flex: 1.5 1 auto;
    }
    &:last-of-type {
      margin-left: 8px;
      flex: 1.3 1 auto;
    }
  }
`;

const Trade = props => {
  return (
    <Layout {...props}>
      <TokenList />
      <TokenBalance />
      <div css={[wrapper]}>
        <TradeList />
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </Layout>
  );
};

export default Trade;

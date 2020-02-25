import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Layout from '../layouts/Layout';
import TokenList from '../components/token/TokenList';
import TokenBalance from '../components/token/TokenBalance';
import TradeHistory from '../components/trade/TradeHistory';
import media from '../common/media';

const wrapper = css`
  display: flex;
  width: calc(72% - 16px);
  margin-top: 16px;

  ${media.down('lg')} {
    width: 100%;
  }

  & > div {
    /* height: 80vh; */
    max-height: 840px;

    &:first-of-type {
      margin-right: 8px;
      flex: 1 1;
    }
    &:nth-of-type(2) {
      margin: 0 8px;
      flex: 1.4 1;
    }
    &:last-of-type {
      margin-left: 8px;
      flex: 1 1;
    }
  }
`;

const Trade = props => {
  return (
    <Layout {...props}>
      <TokenList />
      <TokenBalance />
      <div css={[wrapper]}>
        <TradeHistory />
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </Layout>
  );
};

export default Trade;

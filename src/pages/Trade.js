import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import media from '../common/media';
import Layout from '../layouts/Layout';
import TokenList from '../components/token/TokenList';
import TokenInfo from '../components/token/TokenInfo';
import BalanceForm from '../components/balance/BalanceForm';
import TradeHistory from '../components/trade/TradeHistory';
import Order from '../components/order/Order';

const wrapper = css`
  display: flex;
  width: calc(72% - 16px);
  flex-wrap: wrap-reverse;

  ${media.down('lg')} {
    width: 100%;
  }

  & > div {
    ${media.up('sm')} {
      margin-top: 16px;
      max-height: 640px;
    }

    ${media.down('sm')} {
      margin-top: 8px;
    }

    &:first-of-type {
      ${media.up('sm')} {
        flex: 1 1;
      }
      ${media.down('sm')} {
        width: 100%;
      }
    }
    &:nth-of-type(2) {
      ${media.up('sm')} {
        margin: 0 16px;
        flex: 1.4 1;
      }
      ${media.down('sm')} {
        width: 100%;
      }
    }
    &:last-of-type {
      ${media.up('sm')} {
        flex: 1 1;
      }
      ${media.down('sm')} {
        width: 100%;
      }
    }
  }
`;

const Trade = props => {
  return (
    <Layout {...props}>
      <TokenList />
      <TokenInfo />
      <BalanceForm />
      <div css={[wrapper]}>
        <TradeHistory />
        <Order />
        <div className="card"></div>
      </div>
    </Layout>
  );
};

export default Trade;

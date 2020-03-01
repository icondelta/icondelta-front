import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import media from '../common/media';
import Layout from '../layouts/Layout';
import TokenList from '../components/token/TokenList';
import TokenInfo from '../components/token/TokenInfo';
import BalanceForm from '../components/balance/BalanceForm';
import TradeHistory from '../components/trade/TradeHistory';
import OrderForm from '../components/order/OrderForm';
import OrderBook from '../components/order/OrderBook';
import History from '../components/history/History';

const wrapper = css`
  display: inline-flex;
  width: calc(72% - 16px);
  flex-wrap: wrap-reverse;
  /* align-items: start; */

  ${media.up('lg')} {
    margin-left: 16px;
  }
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

    &:last-of-type {
      display: inline-flex;
      flex-direction: column;

      ${media.up('md')} {
        flex: 1;
      }
      ${media.down('md')} {
        flex: 1.2;
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
        <OrderBook />
        <div>
          <OrderForm />
          <History />
        </div>
      </div>
    </Layout>
  );
};

export default Trade;

import React, { useEffect } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import media from '../styles/media';
import Layout from '../layouts/Layout';
import TokenList from '../components/token/TokenList';
import TokenInfo from '../components/token/TokenInfo';
import BalanceForm from '../components/balance/BalanceForm';
import TradeHistory from '../components/trade/TradeHistory';
import OrderForm from '../components/order/OrderForm';
import OrderBook from '../components/order/OrderBook';
import History from '../components/history/History';
import TrollBox from '../components/trollbox/TrollBox';
import BalanceInfo from '../components/balance/BalanceInfo';
import { useIconex } from '../hooks/useIconex';
import { dispatchIconexEvent } from '../commons/iconex';

const wrapper = css`
  display: inline-flex;
  width: calc(75% - 16px);
  flex-wrap: wrap-reverse;

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
      &:not(:last-of-type) {
        max-height: 400px;
      }
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

const balanceWrapper = css`
  display: inline-flex;
  margin-top: 16px;
  width: calc(75% - 16px);

  ${media.up('lg')} {
    margin-left: 16px;
  }
  ${media.down('lg')} {
    width: 100%;
  }
  ${media.down('sm')} {
    margin-top: 8px;
    flex-direction: column;
  }
`;

const Trade = (props) => {
  useIconex(e => {
    // TODO: Implement event handler with response data
  });

  useEffect(() => {
    window.onload = () => dispatchIconexEvent({ type: 'REQUEST_ADDRESS' });
  }, []);

  return (
    <Layout {...props}>
      <TokenList />
      <TokenInfo />
      <div css={[balanceWrapper]}>
        <BalanceForm />
        <BalanceInfo />
      </div>
      <div css={[wrapper]}>
        <TradeHistory />
        <OrderBook />
        <div>
          <OrderForm />
          <TrollBox />
        </div>
      </div>
      <History />
    </Layout>
  );
};

export default Trade;

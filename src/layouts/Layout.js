import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Header from './Header';
import Footer from './Footer';
import TokenContextProvider from '../contexts/TokenContext';
import TokenListContextProvider from '../contexts/TokenListContext';

const container = css`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 8px 16px;
  flex: 1 1 auto;
  @media (max-width: 1199.98px) {
    margin: 0;
  }
  @media (max-width: 767.98px) {
    padding: 8px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <TokenListContextProvider>
        <TokenContextProvider>
          <Header />
          <main css={[container]}>{children}</main>
          <Footer />
        </TokenContextProvider>
      </TokenListContextProvider>
    </>
  );
};

export default Layout;

import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Header from './Header';
import Footer from './Footer';
import TokenContextProvider from '../contexts/TokenContext';

const container = css`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 8px 16px;
  @media (max-width: 1199.98px) {
    margin: 0;
  }
  @media (max-width: 767.98px) {
    padding: 8px;
  }
`;

const Layout = ({ children, ...props }) => {
  return (
    <TokenContextProvider {...props}>
      <Header />
      <main css={[container]}>{children}</main>
      <Footer />
    </TokenContextProvider>
  );
};

export default Layout;

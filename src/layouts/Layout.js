import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Header from './Header';
import Footer from './Footer';
import media from '../common/media';
import TokenContextProvider from '../contexts/TokenContext';
import TokenListContextProvider from '../contexts/TokenListContext';
import UiContextProvider from '../contexts/UiContext';

const container = css`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  flex: 1 1 auto;
  padding: 16px;
  ${media.down('sm')} {
    padding: 8px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <TokenListContextProvider>
        <TokenContextProvider>
          <UiContextProvider>
            <Header />
            <main css={[container]}>{children}</main>
          </UiContextProvider>
          <Footer />
        </TokenContextProvider>
      </TokenListContextProvider>
    </>
  );
};

export default Layout;

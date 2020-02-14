import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Header from './Header';
import Footer from './Footer';

const container = css`
  display: flex;
  width: 1440px;
  margin: 0 auto;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 0 16px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main css={container}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

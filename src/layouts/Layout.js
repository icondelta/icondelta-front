import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TokenContextProvider from '../contexts/TokenContext';

const Layout = ({ children }) => {
  return (
    <TokenContextProvider>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </TokenContextProvider>
  );
};

export default Layout;

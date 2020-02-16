import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TokenContextProvider from '../contexts/TokenContext';

const Layout = ({ children, ...props }) => {
  return (
    <TokenContextProvider {...props}>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </TokenContextProvider>
  );
};

export default Layout;

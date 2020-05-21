import React from 'react';
/** @jsx jsx */
import { jsx, Global } from '@emotion/core';

import RouterView from './routes';
import WalletContextProvider from './contexts/WalletContext';
import './styles/buttons.scss';
import { global } from './styles/global';

const App = () => {
  return (
    <WalletContextProvider>
      <Global styles={global} />
      <RouterView />
    </WalletContextProvider>
  );
};

export default App;

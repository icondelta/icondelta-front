import React from 'react';
/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import { HashRouter } from 'react-router-dom';

import RouterView from './routes';
import './styles/buttons.scss';
import { global } from './styles/global';

function App() {
  return (
    <HashRouter>
      <Global styles={global} />
      <RouterView />
    </HashRouter>
  );
}

export default App;

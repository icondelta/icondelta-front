import React from 'react';
/** @jsx jsx */
import { jsx, Global } from '@emotion/core';

import RouterView from './routes';
import './styles/buttons.scss';
import { global } from './styles/global';

function App() {
  return (
    <>
      <Global styles={global} />
      <RouterView />
    </>
  );
}

export default App;

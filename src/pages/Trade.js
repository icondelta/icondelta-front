import React from 'react';

import Layout from '../layouts/Layout';
import TokenList from '../components/token/TokenList';
import TokenBalance from '../components/token/TokenBalance';

const Trade = props => {
  return (
    <Layout {...props}>
      <TokenList />
      <TokenBalance />
    </Layout>
  );
};

export default Trade;

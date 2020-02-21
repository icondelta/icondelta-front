import React from 'react';

import Layout from '../layouts/Layout';
import Balance from '../components/balance/Balance';
import TokenList from '../components/token/TokenList';

const Trade = props => {
  return (
    <Layout {...props}>
      <TokenList />
      <Balance />
    </Layout>
  );
};

export default Trade;

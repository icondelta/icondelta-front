import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Trade from '../pages/Trade';
import Error from '../pages/Error';
import Layout from '../layouts/Layout';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/trade/AC3" />
      </Route>
      <Route
        path="/trade/:symbol"
        component={props => (
          <Layout {...props}>
            <Trade {...props} />
          </Layout>
        )}
      />
      <Route
        component={props => (
          <Layout {...props}>
            <Error status={404} message="Page not found." location={props.location} />
          </Layout>
        )}
      />
    </Switch>
  );
};

export default Router;

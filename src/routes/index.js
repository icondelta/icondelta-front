import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Trade from '../pages/Trade';
import Error from '../pages/Error';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/trade/AC3" />
      </Route>
      <Route path="/trade/:symbol" component={Trade} />
      <Route
        component={({ location }) => (
          <Error status={404} message="Page not found." location={location} />
        )}
      />
    </Switch>
  );
};

export default Router;

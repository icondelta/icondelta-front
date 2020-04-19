import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Trade from '../pages/Trade';
import Error from '../pages/Error';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/AC3" />
      </Route>
      <Route path="/:symbol" component={Trade} />
      <Route component={(_) => <Error status={404} message="Page not found." />} />
    </Switch>
  );
};

export default Router;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Trade from '../pages/Trade';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/trade',
    component: Trade,
  },
];

const Router = () => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={i}
          exact={route.exact}
          path={route.path}
          render={props => <route.component {...props} />}
        />
      ))}
    </Switch>
  );
};

export default Router;

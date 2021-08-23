import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/router';
import { useSelector } from 'react-redux';

const AppRouter = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    isAuth ?
      (
        <Switch>
          {privateRoutes.map((route) => (
            <Route
              component={route.component}
              path={route.path}
              exact={route.exact}
              key={route.path}
            />
          ))}
          <Redirect to="/games" />
        </Switch>
      ) :
      (
        <Switch>
          {publicRoutes.map((route) => (
            <Route
              component={route.component}
              path={route.path}
              exact={route.exact}
              key={route.path}
            />
          ))}
          <Redirect to="/login" />
        </Switch>
      )
  );
};

export default AppRouter;

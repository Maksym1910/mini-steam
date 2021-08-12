import React, { useContext } from 'react';
import {
  Redirect, Route, Switch,
} from 'react-router-dom';
import { AuthContext } from '../context/context';
import { privateRoutes, publicRoutes } from '../router/router';

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    isAuth
      ? (
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
      )
      : (
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

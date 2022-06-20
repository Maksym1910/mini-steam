import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { authAction } from './redux/actions/authActions';
import { getGamesAction } from './redux/actions/gamesActions';

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter.jsx';
import Header from './components/Header/Header';
import { getGames } from './API/games-service.js';
import { isAuthSelector } from './shared/selectors/auth-selector.js';

import 'antd/dist/antd.css';
import './index.css';

const App = (props) => {
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (localStorage.getItem('AUTH')) {
      dispatch(authAction(true));

      const games = await getGames();
      dispatch(getGamesAction(games));
    }
  }, []);

  return (
    <BrowserRouter>
      {isAuth && <Header />}
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;

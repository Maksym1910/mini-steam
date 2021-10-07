import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from './redux/actions/authActions';
import { getGamesAction } from './redux/actions/gamesActions';
import { getGames } from './API/gamesService';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
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
}

export default App;

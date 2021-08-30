import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { GamesContext } from './context/context';
import Header from './components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from './redux/actions/authActions';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('AUTH')) {
      dispatch(authAction(true));
    }
  }, []);

  return (
    <GamesContext.Provider value={{ games, setGames, isLoading, setIsLoading }} >
      <BrowserRouter>
        {isAuth && <Header />}
        <AppRouter />
      </BrowserRouter>
    </GamesContext.Provider>
  );
}

export default App;

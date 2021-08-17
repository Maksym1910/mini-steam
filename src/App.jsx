import React, { useState, useEffect } from 'react';
import './styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { AuthContext, GamesContext } from './context/context';
import Navbar from './components/Navbar';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }

    fetch('games.json')
        .then((response) => response.json())
        .then((data) => {
          setGames(data);
        });
  }, []);


  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <GamesContext.Provider value={{ games, setGames }} >
        <BrowserRouter>
          {isAuth && <Navbar />}
          <AppRouter />
        </BrowserRouter>
      </GamesContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

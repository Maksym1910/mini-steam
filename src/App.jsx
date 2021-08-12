import React from 'react';
import './styles/styles.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Games from './pages/Games';
import Library from './pages/Library';
import Friends from './pages/Friends';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/games" component={Games} exact />
        <Route path="/library" component={Library} exact />
        <Route path="/friends" component={Friends} exact />
        <Route path="/profile" component={Profile} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/logo.svg';

const Navbar = () => (
  <header className="header">
    <Link to="/games"><Logo className="header__logo" /></Link>
    <nav className="nav">
      <ul className="nav__list">
        <li><Link to="/games" className="nav__item">Games</Link></li>
        <li><Link to="/library" className="nav__item">Library</Link></li>
        <li><Link to="/friends" className="nav__item">Friends</Link></li>
        <li><Link to="/profile" className="nav__item">Profile</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;

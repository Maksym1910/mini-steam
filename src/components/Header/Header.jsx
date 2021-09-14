import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import styles from './Header.module.scss';


const Header = () => (
  <header className={styles.header}>
    <Link to="/games"><Logo className={styles.headerLogo} /></Link>
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/games"
            activeClassName={styles.navItemActive}
            className={styles.navItem}
          >
            Games
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/library"
            activeClassName={styles.navItemActive}
            className={styles.navItem}
          >
            Library
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/friends"
            activeClassName={styles.navItemActive}
            className={styles.navItem}
          >
            Friends
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            activeClassName={styles.navItemActive}
            className={styles.navItem}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

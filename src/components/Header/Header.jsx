import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import styles from './Header.module.scss';


const Header = () => (
  <header className={styles.header}>
    <Link to="/games"><Logo className={styles.headerLogo} /></Link>
    <nav>
      <ul className={styles.navList}>
        <li><Link to="/games" className={styles.navItem}>Games</Link></li>
        <li><Link to="/library" className={styles.navItem}>Library</Link></li>
        <li><Link to="/friends" className={styles.navItem}>Friends</Link></li>
        <li><Link to="/profile" className={styles.navItem}>Profile</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

import React from 'react';
import styles from './Layout.module.scss';

const Layout = (props) => {
  const { children } = props;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {children}
      </div>
    </section>
  );
};

export default Layout;

import React from 'react';
import styles from './Layout.module.scss';

const Layout = (props) => {
  const {
    children,
    container = styles.container,
  } = props;

  return (
    <section className={styles.section}>
      <div className={container}>
        {children}
      </div>
    </section>
  );
};

export default Layout;

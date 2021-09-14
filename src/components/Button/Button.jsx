import React, { useState } from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  const {
    children,
    className,
  } = props;
  const [animation, setAnimation] = useState(false);

  return (
    <button
      {...props}
      className={
        animation ? `${className} ${styles.animation1}` : `${className}`
      }
      onMouseEnter={() => {
        setAnimation(true);
      }}
      onMouseLeave={() => {
        setAnimation(false);
      }}
    >
      {children}
    </button>
  );
};


export default Button;

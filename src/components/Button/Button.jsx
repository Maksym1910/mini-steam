import React from 'react';

const Button = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;

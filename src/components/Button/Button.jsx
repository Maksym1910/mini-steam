import React from 'react';

const Button = (props) => {
  const {
    children,
  } = props;

  return (
    <button {...props}>
      {children}
    </button>
  );
};


export default Button;

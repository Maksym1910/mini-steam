/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const Button = ({ children, ...props }) => (
  <button {...props}>
    {children}
  </button>
);

export default Button;

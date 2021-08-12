/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../../styles/form.css';

const Form = ({ children, ...props }) => (
  <form {...props}>
    <h2 className="form__title">{props.title}</h2>
    {children}
  </form>
);

export default Form;

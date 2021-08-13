/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../../styles/form.css';

const Form = ({ children, ...props }) => (
  <div className="form-wrapper">
    <form className="form" {...props}>
      <h2 className="form__title">{props.title}</h2>
      {children}
    </form>
  </div>
);

export default Form;

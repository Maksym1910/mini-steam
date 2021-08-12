/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../../styles/form.css';

const Input = ({ inputField, type }) => (
  <fieldset className="input">
    <label className="input__label">{inputField}</label>
    <input type={type} className="input__field" placeholder={inputField} />
  </fieldset>
);

export default Input;

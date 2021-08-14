/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../../styles/form.css';

const Input = ({ inputField, type }) => (
  <input type={type} className="input__field" placeholder={inputField} />
);

export default Input;

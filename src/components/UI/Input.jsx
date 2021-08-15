import React from 'react';
import '../../styles/form.css';

const Input = ({ inputField, type }) => (
  <input type={type} className="input__field" placeholder={inputField} />
);

export default Input;

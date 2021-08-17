import React from 'react';
import '../../styles/form.css';

const Input = ({ inputField, type, ...props }) => (
  <input type={type} className="input__field" placeholder={inputField} {...props} />
);

export default Input;

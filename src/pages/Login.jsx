/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import Form from '../components/UI/Form';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import '../styles/profile.css';
import '../styles/buttons.css';
import { AuthContext } from '../context/context';

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div className="login">
      <Form className="form" title="Sign In" onSubmit={login}>
        <Input inputField="Email" type="text" />
        <Input inputField="Password" type="password" />
        <Button className="button-main">Login</Button>
      </Form>
    </div>
  );
};

export default Login;

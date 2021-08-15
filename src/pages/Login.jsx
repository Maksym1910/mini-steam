import React, { useContext } from 'react';
import Form from '../components/UI/Form';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import '../styles/login.css';
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
    <section className="login">
      <Form title="Sign In" onSubmit={login}>
        <Input inputField="Email" type="text" />
        <Input inputField="Password" type="password" />
        <Button className="button button--primary button-block">Login</Button>
      </Form>
    </section>
  );
};

export default Login;

import React, { useContext } from 'react';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import { AuthContext } from '../../context/context';
import FormItem from '../../components/Form/FormItem';
import styles from './Login.module.scss';
import btnStyles from '../../components/Button/Button.module.scss';
import classNames from 'classnames';

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <section className={styles.login}>
      <Form title='Sign In' >
        <FormItem
          type='text'
          title='Email'
        />
        <FormItem
          type='password'
          title='Password'
        />
        <Button
          className={classNames(btnStyles.button, btnStyles.buttonPrimary, btnStyles.buttonBlock)}
          onClick={login}
        >
          Sign In
        </Button>
      </Form>
    </section>
  );
};

export default Login;

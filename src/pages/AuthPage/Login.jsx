import React from 'react';
import styles from './Auth.module.scss';
import btnStyles from '../../components/Button/Button.module.scss';
import { authAction } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import Auth from '../../components/Auth/Auth';


const Login = () => {
  const dispatch = useDispatch();

  const login = async (values) => {
    dispatch(authAction(true));
    localStorage.setItem('AUTH', true);
    console.log(values);
  };

  return (
    <section className={styles.auth}>
      <Auth
        formTitle='Login'
        secondFormOption={{ link: '/register', title: 'Register' }}
        onSubmit={login}
        btnStyles={btnStyles}
        options={[
          { inputTitle: 'Email', type: 'text' },
          { inputTitle: 'Password', type: 'password' },
        ]}
      />
    </section>
  );
};

export default Login;

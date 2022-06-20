import React from 'react';

import { useDispatch } from 'react-redux';
import { authAction } from '../../redux/actions/authActions';
import { getGamesAction } from '../../redux/actions/gamesActions';

import { getGames } from '../../API/games-service.js';
import {
  LOGIN_FORM_NAME,
  loginFormInputs,
  registerFormConfig,
} from './constants.js';

import styles from './Auth.module.scss';
import btnStyles from '../../components/Button/Button.module.scss';
import Auth from '../../components/Auth/Auth';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = async () => {
    localStorage.setItem('AUTH', 'true');

    dispatch(authAction(true));
    dispatch(getGamesAction(await getGames()));
  };

  return (
    <section className={styles.auth}>
      <Auth
        formTitle={LOGIN_FORM_NAME}
        secondFormOption={registerFormConfig}
        onSubmit={handleLogin}
        btnStyles={btnStyles}
        options={loginFormInputs} />
    </section>
  );
};

export default Login;

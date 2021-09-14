import React from 'react';
import styles from './Auth.module.scss';
import btnStyles from '../../components/Button/Button.module.scss';
import { authAction } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import Auth from '../../components/Auth/Auth';
import { getGamesAction } from '../../redux/actions/gamesActions';
import { getGames } from '../../API/gamesService';


const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = async () => {
    localStorage.setItem('AUTH', 'true');
    dispatch(authAction(true));

    const games = await getGames();
    dispatch(getGamesAction(games));
  };

  return (
    <section className={styles.auth}>
      <Auth
        formTitle='Login'
        secondFormOption={{ link: '/register', title: 'Register' }}
        onSubmit={handleLogin}
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

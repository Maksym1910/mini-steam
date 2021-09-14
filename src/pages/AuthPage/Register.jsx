import React, { useState } from 'react';
import styles from './Auth.module.scss';
import btnStyles from '../../components/Button/Button.module.scss';
import Auth from '../../components/Auth/Auth';
import { register } from '../../services/authService';
import LoaderSpinner from '../../components/LoaderSpinner/LoaderSpinner';

const Register = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegister = async (inputValues) => {
    setIsRegistering(true);
    await register(inputValues);
    setIsRegistering(false);
  };

  return (
    <section className={styles.auth}>
      {
        isRegistering ?
          <LoaderSpinner /> :
          <Auth
            formTitle='Register'
            secondFormOption={{ link: '/login', title: 'Login' }}
            onSubmit={handleRegister}
            btnStyles={btnStyles}
            options={[
              { inputTitle: 'Email', type: 'text' },
              { inputTitle: 'Password', type: 'password' },
              { inputTitle: 'Username', type: 'text' },
              { inputTitle: 'Age', type: 'text' },
            ]}
          />
      }
    </section>
  );
};

export default Register;

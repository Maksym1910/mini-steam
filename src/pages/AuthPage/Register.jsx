import React, { useState } from 'react';

import { register } from '../../services/authService';
import {
  loginFormConfig,
  REGISTER_FORM_NAME,
  registerFormInputs,
} from './constants.js';

import styles from './Auth.module.scss';
import btnStyles from '../../components/Button/Button.module.scss';
import Auth from '../../components/Auth/Auth';
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
            formTitle={REGISTER_FORM_NAME}
            secondFormOption={loginFormConfig}
            onSubmit={handleRegister}
            btnStyles={btnStyles}
            options={registerFormInputs} />
      }
    </section>
  );
};

export default Register;

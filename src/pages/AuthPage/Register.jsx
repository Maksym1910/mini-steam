import React from 'react';
import styles from './Auth.module.scss';
import btnStyles from '../../components/Button/Button.module.scss';
import Auth from '../../components/Auth/Auth';

const Register = () => {
  const register = async (values) => {
    console.log(values);
  };

  return (
    <section className={styles.auth}>
      <Auth
        formTitle='Register'
        secondFormOption={{ link: '/login', title: 'Login' }}
        onSubmit={register}
        btnStyles={btnStyles}
        options={[
          { inputTitle: 'Email', type: 'text' },
          { inputTitle: 'Password', type: 'password' },
          { inputTitle: 'Username', type: 'text' },
          { inputTitle: 'Age', type: 'text' },
        ]}
      />
    </section>
  );
};

export default Register;

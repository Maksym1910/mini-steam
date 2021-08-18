import React, { useContext } from 'react';
import styles from './Profile.module.scss';
import btnStyles from '../../components/Button/Button.module.scss';
import classNames from 'classnames';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import { AuthContext } from '../../context/context';
import FormItem from '../../components/Form/FormItem';

const Profile = () => {
  const {
    setIsAuth,
  } = useContext(AuthContext);

  const save = (event) => {
    event.preventDefault();
    alert('Profile saved');
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <section className={styles.profile}>
      <Form title='Profile' >
        <FormItem
          type='text'
          title='Username'
        />
        <FormItem
          type='text'
          title='Email'
        />
        <FormItem
          type='text'
          title='Age'
        />
        <div className={btnStyles.btnContainer}>
          <Button
            className={classNames(btnStyles.button, btnStyles.buttonPrimary)}
            onClick={save}
          >
            Save
          </Button>
          <Button
            className={classNames(btnStyles.button, btnStyles.buttonWarn)}
            onClick={logout}
          >
            Log out
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default Profile;

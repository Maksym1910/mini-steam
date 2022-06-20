import React from 'react';

import { useDispatch } from 'react-redux';
import { authAction } from '../../redux/actions/authActions';
import { clearGamesAction } from '../../redux/actions/gamesActions';

import { FORM_INPUTS } from './constants.js';
import styles from './ProfilePage.module.scss';
import btnStyles from '../../components/Button/Button.module.scss';
import classNames from 'classnames';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import FormItem from '../../components/Form/FormItem';

const ProfilePage = () => {
  const dispatch = useDispatch();

  const save = (event) => {
    event.preventDefault();
    alert('ProfilePage saved');
  };

  const logout = () => {
    dispatch(authAction(false));
    localStorage.removeItem('AUTH');
    dispatch(clearGamesAction([]));
  };

  return (
    <section className={styles.profile}>
      <Form title='ProfilePage' >
        {
          FORM_INPUTS.map((formInput) => (
            <FormItem
              key={formInput.title}
              type={formInput.type}
              title={formInput.title}
            />
          ))
        }
        <div className={btnStyles.btnContainer}>
          <Button
            className={classNames(btnStyles.button, btnStyles.buttonPrimary)}
            onClick={save}>Save</Button>
          <Button
            className={classNames(btnStyles.button, btnStyles.buttonWarn)}
            onClick={logout}>Log out</Button>
        </div>
      </Form>
    </section>
  );
};

export default ProfilePage;

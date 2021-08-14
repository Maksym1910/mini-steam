/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import '../styles/profile.css';
import '../styles/buttons.css';
import Form from '../components/UI/Form';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import { AuthContext } from '../context/context';

const Profile = () => {
  const { setIsAuth } = useContext(AuthContext);

  const save = (event) => {
    event.preventDefault();
    alert('Profile saved');
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <section className="profile">
      <Form title="Profile">
        <fieldset className="input">
          <label>Username</label>
          <Input inputField="Username" />
        </fieldset>
        <fieldset className="input">
          <label>Email</label>
          <Input inputField="Email" />
        </fieldset>
        <fieldset className="input">
          <label>Password</label>
          <Input inputField="Password" />
        </fieldset>
        <Button className="button button--primary button-block" onClick={save}>Save</Button>
        <Button className="button button--warn button-block" onClick={logout}>Log out</Button>
      </Form>
    </section>
  );
};

export default Profile;

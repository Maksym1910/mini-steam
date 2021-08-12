/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Form from '../components/UI/Form';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import '../styles/profile.css';
import '../styles/buttons.css';

const Profile = () => {
  const save = (event) => {
    event.preventDefault();
    alert('Profile saved');
  };

  return (
    <div className="profile">
      <Form className="form" title="Profile">
        <Input inputField="Username" />
        <Input inputField="Email" />
        <Input inputField="Age" />
        <Button className="button-main" onClick={save}>Save</Button>
      </Form>
    </div>
  );
};

export default Profile;

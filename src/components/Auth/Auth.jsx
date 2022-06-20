import React from 'react';
import Form from '../../components/Form/Form';
import FormItem from '../../components/Form/FormItem';
import classNames from 'classnames';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import styles from '../../pages/AuthPage/Auth.module.scss';


const Auth = (props) => {
  const {
    formTitle,
    secondFormOption,
    onSubmit,
    btnStyles,
    options,
  } = props;
  const buttonStyles = classNames(btnStyles.button, btnStyles.buttonPrimary, btnStyles.buttonBlock);

  return (
    <Form title={formTitle} onFinish={onSubmit}>
      {
        options.map((option, index) => (
          <FormItem
            key={index}
            type={option.type}
            title={option.inputTitle}
          />
        ))
      }
      <Button type="primary" className={buttonStyles}>{formTitle}</Button>
      <p className={styles.delimiter}>or</p>
      <div className={styles.link}>
        <Link to={secondFormOption.link}>{secondFormOption.title}</Link>
      </div>
    </Form>
  );
};

export default Auth;

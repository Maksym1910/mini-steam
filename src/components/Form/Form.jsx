import React from 'react';
import { Form } from 'antd';
import Layout from '../Layout/Layout';
import styles from './Form.module.scss';

const CustomForm = (props) => {
  const {
    children,
    title,
  } = props;

  return (
    <Layout
      container={styles.container}
    >
      <Form
        name="normal_login"
        className="login-form"
      >
        <h2 className={styles.formTitle}>{title}</h2>
        {children}
      </Form>
    </Layout>
  );
};

export default CustomForm;

import React from 'react';

import { Form } from 'antd';
import Layout from '../Layout/Layout';
import styles from './Form.module.scss';
import { FORM_NAME } from './constants.js';

const CustomForm = (props) => {
  const {
    children,
    title,
    onFinish,
  } = props;

  return (
    <Layout
      container={styles.container}>
      <Form
        name={FORM_NAME}
        className="login-form"
        onFinish={onFinish}>
        <h2 className={styles.formTitle}>{title}</h2>
        {children}
      </Form>
    </Layout>
  );
};

export default CustomForm;

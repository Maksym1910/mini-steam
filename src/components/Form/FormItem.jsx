import React from 'react';
import { Form, Input } from 'antd';
import styles from './Form.module.scss';

const FormItem = (props) => {
  const {
    type,
    title,
  } = props;

  return (
    <Form.Item
      type={type}
      name={title}
    >
      <label>
        {title}
        <Input
          placeholder={title}
          className={styles.formInput}
        />
      </label>
    </Form.Item>
  );
};

export default FormItem;

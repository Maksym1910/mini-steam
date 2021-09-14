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
      name={title}
    >
      <label>
        {title}
        {type === 'password' ?
          <Input.Password
            placeholder={title}
            className={styles.formInput}
          /> :
          <Input
            placeholder={title}
            className={styles.formInput}
          />
        }
      </label>
    </Form.Item>
  );
};

export default FormItem;

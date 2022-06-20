import React, { useCallback } from 'react';

import { Select } from 'antd';
const { Option } = Select;
import styles from './SortSelect.module.scss';

const SortSelect = (props) => {
  const {
    options,
    defaultValue,
    value,
    onChange,
  } = props;

  const handleChange = useCallback((value) => {
    onChange(value);
  }, [onChange]);

  return (
    <section className={styles.container}>
      <h2>Sort By</h2>
      <Select
        value={value}
        onChange={handleChange}>
        <Option disabled value="">{defaultValue}</Option>
        {
          options.map((option) =>
            <Option value={option.value} key={option.value}>
              {option.body}
            </Option>,
          )
        }
      </Select>
    </section>
  );
};

export default SortSelect;

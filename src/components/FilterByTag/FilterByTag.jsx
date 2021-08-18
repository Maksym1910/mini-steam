import React from 'react';
import { Checkbox } from 'antd';
import styles from './FilterByTag.module.scss';
import classNames from 'classnames';

const FilterByTag = (props) => {
  const {
    tags,
    onChange,
  } = props;

  const checkedValues = (checkedValues) => {
    onChange(checkedValues);
  };

  return (
    <section>
      <h2>Filter by tag</h2>
      <Checkbox.Group
        className={classNames(styles.tagContainer, styles.tagLabel)}
        options={tags}
        onChange={checkedValues}
      />
    </section>
  );
};

export default FilterByTag;

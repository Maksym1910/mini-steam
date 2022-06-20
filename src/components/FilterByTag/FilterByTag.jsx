import React, { useCallback } from 'react';

import { Checkbox } from 'antd';
import styles from './FilterByTag.module.scss';
import classNames from 'classnames';

const FilterByTag = (props) => {
  const {
    tags,
    onChange,
  } = props;
  const checkboxGroupStyles = classNames(styles.tagContainer, styles.tagLabel);

  const checkedValues = useCallback((checkedValues) => {
    onChange(checkedValues);
  }, [onChange]);

  return (
    <section>
      <h2>Filter by tag</h2>
      <Checkbox.Group
        className={checkboxGroupStyles}
        options={tags}
        onChange={checkedValues} />
    </section>
  );
};

export default FilterByTag;

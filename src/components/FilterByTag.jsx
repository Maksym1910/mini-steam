import React from 'react';
import { Checkbox } from 'antd';

const FilterByTag = ({ tags, onChange }) => {
  function checkedValues(checkedValues) {
    onChange(checkedValues);
  }

  return (
    <section className="filter-section__tags">
      <h2>Filter by tag</h2>
      <Checkbox.Group
        className="filter-section__tags filter-section__label"
        options={tags}
        onChange={checkedValues}
      />
    </section>
  );
};

export default FilterByTag;

import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

const SortSelect = ({ options, defaultValue, value, onChange }) => {
  const handleChange = (value) => {
    onChange(value);
  };

  return (
    <section className="section-sort">
      <h2>Sort By</h2>
      <Select
        value={value}
        onChange={handleChange}
      >
        <Option disabled value="">{defaultValue}</Option>
        {options.map((option) =>
          <Option value={option.value} key={option.value}>
            {option.body}
          </Option>,
        )}
      </Select>
    </section>
  );
};

export default SortSelect;

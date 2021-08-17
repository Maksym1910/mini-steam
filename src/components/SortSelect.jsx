import React from 'react';

const SortSelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <section>
      <h2>Sort By</h2>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option disabled value="">{defaultValue}</option>
        {options.map((option) =>
          <option value={option.value} key={option.value}>
            {option.body}
          </option>,
        )}
      </select>
    </section>
  );
};

export default SortSelect;

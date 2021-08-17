import React from 'react';

const FilterByTag = ({ tags, onChange }) => {
  const getTagInfo = (event) => ({
    checked: event.target.checked,
    name: event.target.name,
  });

  return (
    <section className="filter-section__tags">
      <h2>Filter by tag</h2>
      {tags.map((tag) => (
        <fieldset key={`fieldset-${tag}`} className="filter-section__tag">
          <input
            name={tag}
            key={tag}
            type='checkbox'
            className='filter-section__input'
            onChange={(event) => onChange(getTagInfo(event))}
          />
          <label key={`label-${tag}`} className='filter-section__label'>{tag}</label>
        </fieldset>
      ))
      }
    </section>
  );
};

export default FilterByTag;

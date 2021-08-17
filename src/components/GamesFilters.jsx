import React from 'react';
import FilterByTag from './FilterByTag';
import '../styles/filters.css';
import SortSelect from './SortSelect';
import { Slider } from 'antd';

const GamesFilters = ({ filter, setFilter }) => {
  const filterByTags = (checkedValues) => {
    setFilter({ ...filter, tags: checkedValues });
  };

  function onAfterChange(value) {
    setFilter({ ...filter, minPrice: value });
  }

  return (
    <section className="filter-section">
      <h2>Filter by Price</h2>
      <Slider
        max={500}
        onAfterChange={onAfterChange}
      />
      <h2 style={{ textAlign: 'center' }}>{filter.minPrice}</h2>
      <SortSelect
        defaultValue="Sort by"
        options={[
          { value: 'title', body: 'By title' },
          { value: 'price', body: 'By price' },
        ]}
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
      />
      <FilterByTag
        tags={['indie', 'action', 'adventure']}
        onChange={filterByTags}
      />
    </section>
  );
};

export default GamesFilters;

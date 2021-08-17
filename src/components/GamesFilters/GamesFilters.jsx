import React from 'react';
import FilterByTag from '../FilterByTag/FilterByTag';
import SortSelect from '../SortSelect';
import { Slider } from 'antd';
import styles from './GamesFilters.module.scss';

const GamesFilters = ({ filter, setFilter }) => {
  const filterByTags = (checkedValues) => {
    setFilter({ ...filter, tags: checkedValues });
  };

  const getPickedValue = (value) => {
    setFilter({ ...filter, minPrice: value });
  };

  return (
    <section className={styles.container}>
      <h2>Filter by Price</h2>
      <Slider
        max={500}
        onAfterChange={getPickedValue}
      />
      <h2 className={styles.sliderPrice}>{filter.minPrice}</h2>
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

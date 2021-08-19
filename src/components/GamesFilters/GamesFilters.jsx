import React from 'react';
import FilterByTag from '../FilterByTag/FilterByTag';
import SortSelect from '../SortSelect/SortSelect';
import styles from './GamesFilters.module.scss';
import FilterByPrice from '../FilterByPrice/FilterByPrice';

const GamesFilters = (props) => {
  const {
    filter,
    setFilter,
  } = props;

  const filterByPrice = (price) => {
    setFilter({ ...filter, minPrice: price });
  };

  const filterByTags = (checkedValues) => {
    setFilter({ ...filter, tags: checkedValues });
  };

  return (
    <section className={styles.container}>
      <FilterByPrice
        filter={filter}
        onChange={filterByPrice}
      />
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

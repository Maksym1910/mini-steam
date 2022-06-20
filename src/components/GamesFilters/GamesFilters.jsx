import React, { useCallback } from 'react';

import FilterByTag from '../FilterByTag/FilterByTag';
import SortSelect from '../SortSelect/SortSelect';
import styles from './GamesFilters.module.scss';
import FilterByPrice from '../FilterByPrice/FilterByPrice';

const GamesFilters = (props) => {
  const {
    filter,
    setFilter,
  } = props;
  const sortSelectOptions = [
    { value: 'title', body: 'By title' },
    { value: 'price', body: 'By price' },
  ];

  const filterByPrice = useCallback((price) => {
    setFilter({ ...filter, minPrice: price });
  }, [filter, setFilter]);

  const filterByTags = useCallback((checkedValues) => {
    setFilter({ ...filter, tags: checkedValues });
  }, [filter, setFilter]);

  const handleSortSelectChange = useCallback((selectedSort) => {
    setFilter({ ...filter, sort: selectedSort });
  }, [filter, setFilter]);

  return (
    <section className={styles.container}>
      <FilterByPrice
        filter={filter}
        onChange={filterByPrice} />
      <SortSelect
        defaultValue="Sort by"
        options={sortSelectOptions}
        value={filter.sort}
        onChange={handleSortSelectChange} />
      <FilterByTag
        tags={['indie', 'action', 'adventure']}
        onChange={filterByTags} />
    </section>
  );
};

export default GamesFilters;

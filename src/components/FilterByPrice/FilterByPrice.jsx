import React from 'react';
import { Slider } from 'antd';
import styles from '../GamesFilters/GamesFilters.module.scss';

const FilterByPrice = (props) => {
  const {
    filter,
    setFilter,
  } = props;

  const getPickedValue = (value) => {
    setFilter({ ...filter, minPrice: value });
  };

  return (
    <section>
      <h2>Filter by Price</h2>
      <Slider
        max={500}
        onAfterChange={getPickedValue}
      />
      <h2 className={styles.sliderPrice}>{filter.minPrice}</h2>
    </section>
  );
};

export default FilterByPrice;

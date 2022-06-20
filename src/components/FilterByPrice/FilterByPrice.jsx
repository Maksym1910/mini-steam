import React, { useCallback } from 'react';

import { Slider } from 'antd';
import styles from '../GamesFilters/GamesFilters.module.scss';

const FilterByPrice = (props) => {
  const {
    filter,
    onChange,
  } = props;

  const getPickedPrice = useCallback((price) => {
    onChange(price);
    return price;
  }, [onChange]);

  return (
    <section>
      <h2>Filter by Price</h2>
      <Slider
        max={500}
        onAfterChange={getPickedPrice} />
      <h2 className={styles.sliderPrice}>{filter.minPrice}</h2>
    </section>
  );
};

export default FilterByPrice;

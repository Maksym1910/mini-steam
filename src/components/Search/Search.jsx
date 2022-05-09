import React, { useMemo, useRef } from 'react';
import debounce from 'lodash.debounce';

import { Input, Button } from 'antd';
import styles from './Search.module.scss';

const Search = (props) => {
  const inputRef = useRef('');

  const handleSearchGame = useMemo(() => {
    return debounce((event) => {
      props.setFilter({ ...props.filter, query: event.target.value });
    }, 500);
  }, [props.filter]);

  return (
    <section>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.subTitle}>{`Search ${props.title}`}</p>
      <fieldset className={styles.searchContainer}>
        <Input
          ref={inputRef}
          value={inputRef.current.value}
          placeholder={`Search ${props.title}`}
          onChange={handleSearchGame}
          className={styles.searchInput} />
        <Button className={styles.searchButton}>Search</Button>
      </fieldset>
    </section>
  );
};

export default Search;



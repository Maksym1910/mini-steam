import React, { useRef } from 'react';
import { Input, Button } from 'antd';
import styles from './Search.module.scss';

const Search = (props) => {
  const input = useRef(null);
  const {
    title,
    filter,
    setFilter,
  } = props;

  const searchGame = () => {
    setFilter({ ...filter, query: input.current.state.value });
  };

  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subTitle}>{`Search ${title}`}</p>
      <fieldset className={styles.searchContainer}>
        <Input
          ref={input}
          value={filter.query}
          placeholder={`Search ${title}`}
          onChange={(event) => setFilter({ ...filter, query: event.target.value })}
          className={styles.searchInput}
        />
        <Button
          className={styles.searchButton}
          onClick={searchGame}>Search</Button>
      </fieldset>
    </section>
  );
};

export default Search;



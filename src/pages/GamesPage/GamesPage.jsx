import React, { useState } from 'react';
import GamesList from '../../components/GamesList/GamesList';
import GamesFilters from '../../components/GamesFilters/GamesFilters';
import Search from '../../components/Search/Search';
import styles from './GamesPage.module.scss';
import Layout from '../../components/Layout/Layout';
import { useGames } from '../../hooks/useGames';
import { useSelector } from 'react-redux';

const GamesPage = () => {
  const {
    games,
  } = useSelector((state) => state.games);

  const [filter, setFilter] = useState({ sort: '', query: '', tags: [], minPrice: 0 });
  const fullFilteredGames = useGames({
    games,
    sort: filter.sort,
    tags: filter.tags,
    minPrice: filter.minPrice,
    query: filter.query,
  });

  console.log(GamesFilters);

  return (
    <Layout>
      <Search
        title='Games'
        filter={filter}
        setFilter={setFilter}
      />
      <section className={styles.featuredGamesContainer}>
        <h2>Featured Games</h2>
        <div className={styles.container}>
          <GamesList games={fullFilteredGames} />
          <GamesFilters
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </section>
    </Layout>
  );
};

export default GamesPage;

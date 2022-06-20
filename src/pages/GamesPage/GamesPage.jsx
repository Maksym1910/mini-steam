import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useGames } from '../../hooks/useGames';

import { gamesSelector } from './games-page-selector.js';
import GamesList from '../../components/GamesList/GamesList';
import GamesFilters from '../../components/GamesFilters/GamesFilters';
import Search from '../../components/Search/Search';
import Layout from '../../components/Layout/Layout';

import styles from './GamesPage.module.scss';
import { TITLE } from './constants.js';

const GamesPage = () => {
  const games = useSelector(gamesSelector);
  const [filter, setFilter] = useState({ sort: '', query: '', tags: [], minPrice: 0 });
  const fullFilteredGames = useGames({
    games,
    sort: filter.sort,
    tags: filter.tags,
    minPrice: filter.minPrice,
    query: filter.query,
  });

  return (
    <Layout>
      <Search
        title={TITLE}
        filter={filter}
        setFilter={setFilter} />
      <section className={styles.featuredGamesContainer}>
        <h2>Featured Games</h2>
        <div className={styles.container}>
          <GamesList games={fullFilteredGames} />
          <GamesFilters
            filter={filter}
            setFilter={setFilter} />
        </div>
      </section>
    </Layout>
  );
};

export default GamesPage;

import React, { useContext, useState } from 'react';
import GamesList from '../../components/GamesList/GamesList';
import GamesFilters from '../../components/GamesFilters/GamesFilters';
import Search from '../../components/Search/Search';
import { GamesContext } from '../../context/context';
import styles from './Games.module.scss';
import Layout from '../../components/Layout/Layout';
import { useGames } from '../../hooks/useGames';

const Games = () => {
  const { games } = useContext(GamesContext);
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
        title='Games'
        filter={filter}
        setFilter={setFilter}
      />
      <section className={styles.featuredGamesContainer}>
        <h2 className="games-section__title">Featured Games</h2>
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

export default Games;

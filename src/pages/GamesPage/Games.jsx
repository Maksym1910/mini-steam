import React, { useContext, useMemo, useState } from 'react';
import GamesList from '../../components/GamesList/GamesList';
import GamesFilters from '../../components/GamesFilters/GamesFilters';
import Search from '../../components/Search/Search';
import { GamesContext } from '../../context/context';
import styles from './Games.module.scss';
import Layout from '../../components/Layout/Layout';

const Games = () => {
  const { games } = useContext(GamesContext);
  const [filter, setFilter] = useState({ sort: '', query: '', tags: [], minPrice: 0 });

  const sortedGames = useMemo(() => {
    if (filter.minPrice) {
      return games.filter((game) => parseFloat(game.price) > filter.minPrice);
    }

    if (filter.sort === 'title' && filter.tags.length) {
      const sortedGames = [...games].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
      return sortedGames.filter((game) => game.tags.some((tag) => filter.tags.includes(tag)));
    }

    if (filter.sort === 'price' && filter.tags.length) {
      const sortedGames = [...games].sort((a, b) =>
        parseFloat(a[filter.sort]) - parseFloat(b[filter.sort]));
      return sortedGames.filter((game) => game.tags.some((tag) => filter.tags.includes(tag)));
    }

    if (filter.sort === 'title') {
      return [...games].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }

    if (filter.sort === 'price') {
      return [...games].sort((a, b) => parseFloat(a[filter.sort]) - parseFloat(b[filter.sort]));
    }

    if (filter.tags.length) {
      return games.filter((game) => game.tags.some((tag) => filter.tags.includes(tag)));
    }

    return games;
  }, [filter.sort, games, filter.tags, filter.minPrice]);

  const fullFilteredGames = useMemo(()=> {
    return sortedGames.filter((game) =>
      game.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedGames, filter.tags]);


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

import React, { useContext, useMemo, useState } from 'react';
import Button from '../components/UI/Button';
import '../styles/games.css';
import GamesList from '../components/GamesList';
import GamesFilters from '../components/GamesFilters';
import { GamesContext } from '../context/context';
import { Input } from 'antd';

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
    <section className="games-section">
      <div className="games-section-wrapper">
        <section>
          <h2 className="games-section__title">Games</h2>
          <p>Search Games</p>
          <fieldset className="games-section__input">
            <Input
              value={filter.query}
              onChange={(event) => setFilter({ ...filter, query: event.target.value })}
            />
            <Button className="button button--primary">Search</Button>
          </fieldset>
        </section>
        <section className="featured-games">
          <h2 className="games-section__title">Featured Games</h2>
          <div className="featured-games-container">
            <GamesList games={fullFilteredGames} />
            <GamesFilters
              filter={filter}
              setFilter={setFilter}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Games;

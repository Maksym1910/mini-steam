/* eslint-disable quote-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import '../styles/games.css';
import GamesList from '../components/GamesList';

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('games.json')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <section className="games-section">
      <div className="games-section-wrapper">
        <section>
          <h2 className="games-section__title">Games</h2>
          <label>Search Games</label>
          <fieldset className="games-section__input">
            <Input />
            <Button className="button button--primary">Search</Button>
          </fieldset>
        </section>
        <section className="featured-games">
          <h2 className="games-section__title">Featured Games</h2>
          <div className="featured-games-container">
            <GamesList games={games} />
            <hr className="line" />
            <div className="aside" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Games;

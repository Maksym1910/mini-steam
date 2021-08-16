import React from 'react';
import Game from './Game';
import '../styles/games.css';

const GamesList = ({ games }) => (
  <section className="featured-games-wrapper">
    {games.map((game) => (
      <Game gameInfo={game} key={game.id} />
    ))}
  </section>
);

export default GamesList;

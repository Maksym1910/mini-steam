/* eslint-disable react/prop-types */
import React from 'react';
import Game from './Game';
import '../styles/games.css';

const GamesList = ({ games }) => (
  <div className="featured-games-wrapper">
    {games.map((game) => (
      <Game gameInfo={game} key={game.id} />
    ))}
  </div>
);

export default GamesList;

/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import Button from './UI/Button';

const Game = ({ gameInfo }) => (
  <div className="game-card">
    <div className="game-card-view">
      <h3 className="game-card-view__title">{gameInfo.title}</h3>
      <span className="game-card-view__price">{gameInfo.price}</span>
    </div>
    <div className="game-card__desc">
      <p className="game-card__desc-text">{gameInfo.desc}</p>
      <Button className="button button--primary button-block">Add to Library</Button>
    </div>
  </div>
);

export default Game;

import React from 'react';
import Game from '../Game/Game';
import styles from './GamesList.module.scss';

const GamesList = (props) => {
  const {
    games,
  } = props;

  return (
    <section className={styles.container}>
      {games.map((game) => (
        <Game gameInfo={game} key={game.id} />
      ))}
    </section>
  );
};


export default GamesList;

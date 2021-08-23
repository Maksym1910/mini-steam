import React from 'react';
import Game from '../Game/Game';
import styles from './GamesList.module.scss';

const GamesList = (props) => {
  const {
    games,
  } = props;

  return (
    <section className={styles.container}>
      {games.length ?
        games.map((game) => (
          <Game gameInfo={game} key={game.id} />
        )) :
        <h2 className={styles.noFoundMessage}>No Games Found!</h2>
      }
    </section>
  );
};


export default GamesList;

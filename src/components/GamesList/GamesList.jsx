import React, { useContext } from 'react';
import Game from '../Game/Game';
import styles from './GamesList.module.scss';
import { GamesContext } from '../../context/context';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const GamesList = (props) => {
  const { isLoading } = useContext(GamesContext);
  const {
    games,
  } = props;

  return (
    <section className={styles.container}>
      {isLoading ?
        <LoaderSpinner /> :
        games.length ?
          games.map((game) => (
            <Game gameInfo={game} key={game.id} />
          )) :
          <h2 className={styles.noFoundMessage}>No Games Found!</h2>
      }
    </section>
  );
};


export default GamesList;

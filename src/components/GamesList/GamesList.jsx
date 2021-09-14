import React from 'react';
import Game from '../Game/Game';
import styles from './GamesList.module.scss';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import { useSelector } from 'react-redux';

const GamesList = (props) => {
  const {
    isGamesLoaded,
  } = useSelector((state) => state.games);
  const {
    games,
  } = props;

  return (
    <section className={styles.container}>
      {
        !isGamesLoaded ?
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

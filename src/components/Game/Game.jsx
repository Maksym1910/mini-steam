import React from 'react';
import Button from '../UI/Button';
import styles from './Game.module.scss';

const Game = (props) => {
  const {
    gameInfo,
  } = props;

  return (
    <div className={styles.gameCard}>
      <div className={styles.gameCardView}>
        <h3 className={styles.gameCardTitle}>{gameInfo.title}</h3>
        <span className={styles.gameCardPrice}>{gameInfo.price}</span>
      </div>
      <div className={styles.gameCardDesc}>
        <p className={styles.gameCardDescText}>{gameInfo.desc}</p>
        <Button className="button button--primary button-block btn-bottom ">Add to Library</Button>
      </div>
    </div>
  );
};


export default Game;

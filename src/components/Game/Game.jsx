import React from 'react';
import Button from '../Button/Button';
import styles from './Game.module.scss';
import classNames from 'classnames';
import btnStyles from '../Button/Button.module.scss';

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
        <Button
          className={classNames(btnStyles.button, btnStyles.buttonPrimary)}
        >
          Add to Library
        </Button>
      </div>
    </div>
  );
};


export default Game;

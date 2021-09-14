import React from 'react';
import Button from '../Button/Button';
import styles from './Game.module.scss';
import classNames from 'classnames';
import btnStyles from '../Button/Button.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addGameToLibraryAction,
  removeGameFromLibraryAction,
} from '../../redux/actions/gamesActions';

const Game = (props) => {
  const dispatch = useDispatch();
  const { libraryGames } = useSelector((state) => state.games);
  const { gameInfo } = props;

  const addGameToLibrary = (game) => {
    if (libraryGames.includes(game)) {
      alert('You have already added this game to your library');
      return;
    }
    dispatch(addGameToLibraryAction([...libraryGames, game]));
  };

  const removeFromLibrary = (game) => {
    dispatch(removeGameFromLibraryAction(game));
  };

  const downloadGame = () => {
    alert('Start downloading...');
  };

  const shareGame = () => {
    alert('Game share');
  };

  const isGameInLibrary = () => {
    return libraryGames.some((game) => game.id === gameInfo.id);
  };

  return (
    <div className={styles.gameCard}>
      <div className={styles.gameCardView}>
        <h3 className={styles.gameCardTitle}>{gameInfo.title}</h3>
        <span className={styles.gameCardPrice}>{gameInfo.price}</span>
      </div>
      <div className={styles.gameCardDesc}>
        <p className={styles.gameCardDescText}>{gameInfo.desc}</p>
        {
          isGameInLibrary() ?
          <div className={btnStyles.libraryBtnContainer}>
            <div className={btnStyles.btnContainerRow}>
              <Button
                className={classNames(btnStyles.button, btnStyles.buttonPrimary)}
                onClick={downloadGame}
              >
              Download
              </Button>
              <Button
                className={classNames(btnStyles.button, btnStyles.buttonShare)}
                onClick={shareGame}
              >
              Share
              </Button>
            </div>
            <Button
              className={classNames(btnStyles.button, btnStyles.buttonPrimary)}
              onClick={() => removeFromLibrary(gameInfo)}
            >
              Remove from Library
            </Button>
          </div> :
          <Button
            className={classNames(btnStyles.button, btnStyles.buttonPrimary)}
            onClick={() => addGameToLibrary(gameInfo)}
          >
           Add to Library
          </Button>
        }
      </div>
    </div>
  );
};


export default Game;

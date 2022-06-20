import React, { useCallback } from 'react';

import Button from '../Button/Button';
import styles from './Game.module.scss';
import classNames from 'classnames';
import btnStyles from '../Button/Button.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  addGameToLibraryAction,
  removeGameFromLibraryAction,
} from '../../redux/actions/gamesActions';
import { libraryGamesSelector } from '../../shared/selectors/games-selector.js';

const Game = (props) => {
  const dispatch = useDispatch();
  const libraryGames = useSelector(libraryGamesSelector);

  const addGameToLibrary = useCallback((game) => {
    if (libraryGames.includes(game)) {
      alert('You have already added this game to your library');
      return;
    }

    dispatch(addGameToLibraryAction([...libraryGames, game]));
  }, [libraryGames, dispatch, addGameToLibraryAction]);

  const removeFromLibrary = useCallback((game) => {
    dispatch(removeGameFromLibraryAction(game));
  }, [libraryGames, dispatch, removeGameFromLibraryAction]);

  const downloadGame = useCallback(() => {
    alert('Start downloading...');
  }, []);

  const shareGame = useCallback(() => {
    alert('Game share');
  }, []);

  const isGameInLibrary = useCallback(() => {
    return libraryGames.some((game) => game.id === props.gameInfo.id);
  }, [libraryGames, props.gameInfo]);

  return (
    <div className={styles.gameCard}>
      <div className={styles.gameCardView}>
        <h3 className={styles.gameCardTitle}>{props.gameInfo.title}</h3>
        <span className={styles.gameCardPrice}>{props.gameInfo.price}</span>
      </div>
      <div className={styles.gameCardDesc}>
        <span className={styles.gameGenres}>Genres: {props.gameInfo.tags.join(', ')}</span>
        <p className={styles.gameCardDescText}>{props.gameInfo.desc}</p>
        {
          isGameInLibrary() ?
            <div className={btnStyles.libraryBtnContainer}>
              <div className={btnStyles.btnContainerRow}>
                <Button
                  className={classNames(btnStyles.button, btnStyles.buttonPrimary)}
                  onClick={downloadGame}>Download</Button>
                <Button
                  className={classNames(btnStyles.button, btnStyles.buttonShare)}
                  onClick={shareGame}>Share</Button>
              </div>
              <Button
                className={classNames(btnStyles.button, btnStyles.buttonPrimary)}
                onClick={() => removeFromLibrary(props.gameInfo)}>Remove from Library</Button>
            </div> :
            <Button
              className={classNames(btnStyles.button, btnStyles.buttonPrimary)}
              onClick={() => addGameToLibrary(props.gameInfo)}>Add to Library</Button>
        }
      </div>
    </div>
  );
};

export default Game;

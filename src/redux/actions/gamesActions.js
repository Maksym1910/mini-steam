import {
  ADD_TO_LIBRARY,
  CLEAR_GAMES,
  GET_GAMES,
  REMOVE_FROM_LIBRARY,
} from './constants';

export const getGamesAction = (games) => ({
  type: GET_GAMES,
  payload: games,
});

export const clearGamesAction = (emptyGamesArray) => ({
  type: CLEAR_GAMES,
  payload: emptyGamesArray,
});

export const addGameToLibraryAction = (game) => ({
  type: ADD_TO_LIBRARY,
  payload: game,
});

export const removeGameFromLibraryAction = (game) => ({
  type: REMOVE_FROM_LIBRARY,
  payload: game,
});

import {
  ADD_TO_LIBRARY,
  CLEAR_GAMES,
  GET_GAMES,
  REMOVE_FROM_LIBRARY,
} from '../actions/constants';

const defaultState = {
  games: [],
  libraryGames: [],
  isGamesLoaded: false,
};

const gamesReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_GAMES:
      return {
        ...state,
        games: payload,
        isGamesLoaded: true,
      };
    case CLEAR_GAMES:
      return {
        ...state,
        games: payload,
        isGamesLoaded: false,
      };
    case ADD_TO_LIBRARY:
      return {
        ...state,
        libraryGames: payload,
      };
    case REMOVE_FROM_LIBRARY:
      return {
        ...state,
        libraryGames: state.libraryGames.filter((game) => game.id !== payload.id),
      };
    default:
      return state;
  }
};

export default gamesReducer;

const defaultState = {
  libraryGames: [],
};

const libraryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ('ADD_TO_LIBRARY'):
      return { ...state, libraryGames: action.payload };
    case ('REMOVE_FROM_LIBRARY'):
      return {
        ...state,
        libraryGames: [...state.libraryGames].filter((game) => game.id !== action.payload.id) };
    default:
      return state;
  }
};

export default libraryReducer;

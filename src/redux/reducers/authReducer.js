const defaultState = {
  isAuth: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ('AUTH'):
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};

export default authReducer;

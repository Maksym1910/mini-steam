import { AUTH } from '../actions/constants';

const defaultState = {
  isAuth: false,
};

const authReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH:
      return { ...state, isAuth: payload };
    default:
      return state;
  }
};

export default authReducer;

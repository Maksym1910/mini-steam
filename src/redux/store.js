import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import gamesReducer from './reducers/gamesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  games: gamesReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

import { createStore, combineReducers } from 'redux';
import libraryReducer from './reducers/libraryReducer';
import authReducer from './reducers/authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  library: libraryReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

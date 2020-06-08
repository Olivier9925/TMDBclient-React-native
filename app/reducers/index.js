import { combineReducers } from 'redux';
import MoviesReducer from './MoviesReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  [MoviesReducer.name]: MoviesReducer.reducer,
  [UserReducer.name]: UserReducer.reducer,
});

import { combineReducers } from 'redux';
import PhotosReducer from './Conteiners/Photos/reducer';
import UsersReducer from './Conteiners/Users/reducer';

export default combineReducers({
  PhotosReducer,
  UsersReducer,
});

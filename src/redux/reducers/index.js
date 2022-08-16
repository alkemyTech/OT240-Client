import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import newsReducer from './news.reducer';
import formReducer from './form.reducer';

export default combineReducers({
  auth: authReducer,
  news: newsReducer,
  form: formReducer,
});

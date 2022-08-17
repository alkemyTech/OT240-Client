import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import newsReducer from './news.reducer';
import formReducer from './form.reducer';
import organizationReducer from './organization.reducer';
import membersReducer from './member.reducer';
import categoriesReducer from './categories.reducer';
import activityReducer from './activity.reducer';
import testimonialReducer from './testimonial.reducer';

export default combineReducers({
  auth: authReducer,
  news: newsReducer,
  form: formReducer,
  organization: organizationReducer,
  members: membersReducer,
  categories: categoriesReducer,
  activity: activityReducer,
  testimonial: testimonialReducer 
});

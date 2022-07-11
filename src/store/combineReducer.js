import { combineReducers } from 'redux';
import testimonials from './slicing/testimonialsSlice';
import users from './slicing/usersSlice';
import organization from './slicing/organizationSlice';

export default combineReducers({
  testimonials,
  users,
  organization,
});

import { combineReducers } from 'redux';
import testimonials from './slicing/testimonialsSlice';
import organization from './slicing/organizationSlice';
import users from './slicing/usersSlice';
import auth from './slicing/auth/authSlice';

export default combineReducers({
  testimonials,
  organization,
  users,
  auth,
});

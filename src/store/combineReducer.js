import { combineReducers } from 'redux';
import testimonials from './slicing/testimonialsSlice';
import users from './slicing/usersSlice';
import counter from './slicing/counterSlice';

export default combineReducers({
  testimonials,
  users,
  counter,
});

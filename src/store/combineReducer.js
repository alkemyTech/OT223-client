import { combineReducers } from 'redux';
import testimonials from './slicing/testimonialsSlice'
import users from './slicing/usersSlice';

export default combineReducers({ 
    testimonials,
    users
})
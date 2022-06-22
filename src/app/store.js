import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from 'redux-saga';
import testimonialsReducer from '../store/slicing/testimonialsSlice'
import testimonialsSaga from '../store/sagas/testimonialsSaga';
import usersReducer from '../store/slicing/usersSlice';
import usersSaga from '../store/sagas/usersSaga';

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    counter: counterReducer,
    testimonials: testimonialsReducer,
    users: usersReducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(testimonialsSaga, usersSaga)

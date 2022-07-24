import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import combineReducers from './combineReducer';
import rootSagas from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: combineReducers,
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(rootSagas);

export default store;

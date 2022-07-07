import { all } from 'redux-saga/effects';
import testimonialsSaga from './testimonialsSaga';
import usersSaga from './usersSaga';

export default function* rootSagas() {
  yield all([testimonialsSaga(), usersSaga()]);
}

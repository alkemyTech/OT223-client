import { all } from 'redux-saga/effects';
import testimonialsSaga from './testimonialsSaga';
import { usersSaga, deleteUserSaga } from './usersSaga';
import organizationSaga from './organizationSaga';

export default function* rootSagas() {
  yield all([
    testimonialsSaga(),
    usersSaga(),
    organizationSaga(),
    deleteUserSaga()
  ]);
}

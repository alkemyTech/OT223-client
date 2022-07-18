import { all } from 'redux-saga/effects';
import testimonialsSaga from './testimonialsSaga';
import organizationSaga from './organizationSaga';
import authSaga from './auth/authSaga';


export default function* rootSagas() {
  yield all([
    testimonialsSaga(),
    organizationSaga(),
    authSaga(),
  ])
}

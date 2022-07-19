import { all } from 'redux-saga/effects';
import testimonialsSaga from './testimonialsSaga';
import organizationSaga from './organizationSaga';
import usersSaga from './usersSaga';
import registerSaga from './auth/registerSaga';
import loginSaga from './auth/loginSaga';


export default function* rootSagas() {
  yield all([
    testimonialsSaga(),
    organizationSaga(),
    usersSaga(),
    registerSaga(),
    loginSaga(),
  ])
}

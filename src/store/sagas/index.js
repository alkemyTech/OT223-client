import { all } from 'redux-saga/effects';
import testimonialsSaga from './testimonialsSaga';
import { usersSaga, deleteUserSaga } from './usersSaga';
import organizationSaga from './organizationSaga';
import registerSaga from './auth/registerSaga';
import loginSaga from './auth/loginSaga';


export default function* rootSagas() {
  yield all([
    testimonialsSaga(),
    organizationSaga(),
    usersSaga(),
    deleteUserSaga(),
    registerSaga(),
    loginSaga(),
  ]);
}

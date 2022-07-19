import { call, put, takeEvery } from 'redux-saga/effects';
import * as auth from '../../services/auth/auth';
import { loginStart, loginSuccess, loginFailure } from '../../slicing/auth/authSlice';

function* loginRequest(action) {
  try {
    const { data } = yield call(auth.login, action.payload);
    yield put(loginSuccess(data.data.token, action));
    } catch (error) {
      yield put(loginFailure(error));
    }
    // redirect to home page
}

/* function* logoutRequest() {
  try {
    yield delay(500);
    const logoutUser = yield call(auth.login);
    yield put(logout(logoutUser));
  } catch (error) {
    yield put(authFailure(error))
  } */
  // redirect to login page
/* } */

/* function* watchAuthFlow() {
  const isloggedIn = localStorage.getItem('token');

  if (isloggedIn) {
    const loginAction = yield take(loginUser);
    yield fork(loginRequest, loginAction.payload);
  }

  yield call(logoutRequest);
} */

export default function* loginSaga() {
  yield takeEvery(loginStart, loginRequest);
}

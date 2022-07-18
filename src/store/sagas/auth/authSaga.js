import { call, put, fork, take, delay, takeEvery } from 'redux-saga/effects';
import * as auth from '../../services/auth/auth';
import { authStart, authFailure, addUser, loginUser, logout } from '../../slicing/auth/authSlice';

function* registerRequest({payload}) {

  try {
    const newUser = yield call(auth.register, payload);
    yield put(addUser(newUser.data));
  } catch (error) {
    yield put(authFailure(error.response.data));
  }
}

function* loginRequest() {
  try {
    yield delay(1000);
    const loggedUser = yield call(auth.login);
    yield put(loginUser(loggedUser));
    } catch (error) {
      yield put(authFailure(error));
    }
    // redirect to home page
}

function* logoutRequest() {
  try {
    yield delay(500);
    const logoutUser = yield call(auth.login);
    yield put(logout(logoutUser));
  } catch (error) {
    yield put(authFailure(error))
  }
  // redirect to login page
}

function* watchAuthFlow() {
  const registerAction = yield take(addUser)
  yield fork(registerRequest, registerAction.payload);

  const isloggedIn = localStorage.getItem('token');

  if (isloggedIn) {
    const loginAction = yield take(loginUser);
    yield fork(loginRequest, loginAction.payload);
  }
    
  yield call(logoutRequest);
}

export default function* authSaga() {
  yield takeEvery(authStart, watchAuthFlow);
}

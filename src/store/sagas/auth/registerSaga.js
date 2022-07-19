import { call, put, takeEvery } from 'redux-saga/effects';
import * as auth from '../../services/auth/auth';
import { authStart, authFailure, addUser } from '../../slicing/auth/authSlice';

function* registerRequest(action) {
  try {
    const newUser = yield call(auth.register, action.payload);
    yield put(addUser(newUser, action));
  } catch (error) {
    yield put(authFailure(error));
  }
}

export default function* registerSaga() {
  yield takeEvery(authStart, registerRequest);
}

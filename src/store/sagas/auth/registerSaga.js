import { call, put, takeEvery } from 'redux-saga/effects';
import * as auth from '../../services/auth/auth';
import { registerStart, registerSuccess, registerFailure } from '../../slicing/auth/authSlice';

function* registerRequest(action) {
  try {
    const newUser = yield call(auth.register, action.payload);
    yield put(registerSuccess(newUser, action));
  } catch (error) {
    yield put(registerFailure(error));
  }
}

export default function* registerSaga() {
  yield takeEvery(registerStart, registerRequest);
}

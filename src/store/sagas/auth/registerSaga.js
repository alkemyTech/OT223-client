import { call, put, takeEvery } from 'redux-saga/effects';
import * as auth from '../../services/auth/auth';
import { registerStart, registerSuccess, registerFailure } from '../../slicing/auth/authSlice';
import { setAlert } from '../../slicing/controller/alertSlice';

function* registerRequest(action) {
  try {
    const newUser = yield call(auth.register, action.payload);
    yield put(registerSuccess(newUser, action));
    yield put(setAlert({
      title: 'Registro exitoso',
      text: 'Su usuario fue registrado. Por favor, inicie sesión.',
      icon: 'success'
    }))
  } catch (error) {
    yield put(registerFailure(error));
    yield put (setAlert({
      title: 'Error',
      text: 'Usuario no registrado. Intente nuevamente.',
      icon: 'error'
    }))
  }
}

export default function* registerSaga() {
  yield takeEvery(registerStart, registerRequest);
}

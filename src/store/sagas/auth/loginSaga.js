import { call, put, takeEvery } from 'redux-saga/effects';
import * as auth from '../../services/auth/auth';
import { loginStart, loginSuccess, loginFailure } from '../../slicing/auth/authSlice';
import { setAlert } from '../../slicing/controller/alertSlice';

function* loginRequest(action) {
  try {
    const { data } = yield call(auth.login, action.payload);
    yield put(loginSuccess(data.data, action));
    yield put(setAlert({
      title: 'Bienvenid@',
      text: 'Gracias por volver',
      icon: 'success'
    }))
    } catch (error) {
      yield put(loginFailure(error));
      yield put(setAlert({
        title: 'Error',
        text: 'Algo salió mal. Intente nuevamente',
        icon: 'error'
      }))
    }
}

export default function* loginSaga() {
  yield takeEvery(loginStart, loginRequest);
}

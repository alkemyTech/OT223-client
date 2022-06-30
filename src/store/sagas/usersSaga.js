import { call, put, takeEvery } from 'redux-saga/effects';
import getUsers from '../services/users';

function* fetchUsers(action) {
  const response = yield call(getUsers);
  yield put(response, action.payload);
}

function* usersSaga() {
  yield takeEvery(fetchUsers);
}

export default usersSaga;

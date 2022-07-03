import { call, put, takeEvery } from 'redux-saga/effects';
import getUsers from '../services/users';
import { getUsersStart } from '../slicing/usersSlice';

function* fetchUsers(action) {
  const response = yield call(getUsers);
  yield put(response, action.payload);
}

export default function* usersSaga() {
  yield takeEvery(getUsersStart, fetchUsers);
}

import { call, put, takeEvery } from 'redux-saga/effects';
import { getUsers, deleteUser } from '../services/users';
import { getUsersStart, deleteUser as deleteSliceUser } from '../slicing/usersSlice';

function* fetchUsers(action) {
  const response = yield call(getUsers);
  yield put(response, action.payload);
}

export function* usersSaga() {
  yield takeEvery(getUsersStart, fetchUsers);
}

function* fetchDeleteUser(action) {
  const response = yield call(deleteUser);
  yield put(response, action.payload);
}

export function* deleteUserSaga() {
  yield takeEvery(deleteSliceUser, fetchDeleteUser);
}

import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../services/api';

function* fetchUsers(action) {
  try {
    const users = yield call(Api.fetchUsers, action.payload.userId);
    yield put({ type: 'USERS_FETCH_SUCCEEDED', fetch: users });
  } catch (error) {
    yield put({ type: 'USERS_FETCH_FAILED', message: error.message });
  }
}

function* usersSaga() {
  yield takeEvery('USERS_FETCH_REQUESTED', fetchUsers);
}

export default usersSaga;

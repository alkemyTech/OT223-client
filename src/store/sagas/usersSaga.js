import { call, put, takeEvery } from 'redux-saga/effects'
import { getUsersSuccess } from '../slicing/usersSlice'

function* fetchUsers() {
    const users = yield call(() => fetch(' http://localhost:4000/api/user'));
    const formattedUsers = yield users.json();
    yield put(getUsersSuccess(formattedUsers))
 }

function* usersSaga() {
    yield takeEvery('users/getUsers', fetchUsers);
}

export default usersSaga;
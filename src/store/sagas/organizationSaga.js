import { call, put, takeEvery } from 'redux-saga/effects';
import getOrganizationData from '../services/organization';
import { getOrganizationFailure, getOrganizationStart, getOrganizationSuccess } from '../slicing/organizationSlice';

function* fetchOrganizationData(action) {
  try {
    const { data } = yield call(getOrganizationData);
    yield put(getOrganizationSuccess(data, action));
  } catch (error) {
    yield put(getOrganizationFailure(error));
  }
}

export default function* organizationSaga() {
  yield takeEvery(getOrganizationStart, fetchOrganizationData);
}

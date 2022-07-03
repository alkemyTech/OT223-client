import { call, put, takeEvery } from 'redux-saga/effects';
import getAllTestimonials from '../services/testimonials';

function* fetchTestimonials(action) {
  const response = yield call(getAllTestimonials);
  yield put(response, action.payload);
}

function* testimonialsSaga() {
  yield takeEvery(fetchTestimonials);
}

export default testimonialsSaga;

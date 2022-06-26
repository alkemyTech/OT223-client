import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../services/api';

function* fetchTestimonials(action) {
  try {
    const testimonials = yield call(Api.fetchTestimonials, action.payload);
    yield put({ type: 'TESTIMONIALS_FETCH_SUCCEEDED', fetch: testimonials });
  } catch (error) {
    yield put({ type: 'TESTIMONIALS_FETCH_FAILED', message: error.message });
  }
}

function* testimonialsSaga() {
  yield takeEvery('TESTIMONIALS_FETCH_REQUESTED', fetchTestimonials);
}

export default testimonialsSaga;

import { call, put, takeEvery } from 'redux-saga/effects';
import getAllTestimonials from '../services/testimonials';
import { getAllTestimonialsStart } from '../slicing/testimonialsSlice';

function* fetchTestimonials(action) {
  const response = yield call(getAllTestimonials);
  yield put(response, action.payload);
}

export default function* testimonialsSaga() {
  yield takeEvery(getAllTestimonialsStart, fetchTestimonials);
}

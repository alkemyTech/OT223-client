/* eslint-disable no-unused-vars */
import { call, put, takeEvery } from 'redux-saga/effects';
import {getAllTestimonials, postTestimony} from '../services/testimonials';
import { setAlert } from '../slicing/controller/alertSlice';
import { getAllTestimonialsStart, postTestimonyFailure, postTestimonyStart, postTestimonySuccess } from '../slicing/testimonialsSlice';

function* fetchTestimonials(action) {
  const response = yield call(getAllTestimonials);
  yield put(response, action.payload);
}

function* postTestimonyFetch(action) {
  try {
    const { data } = yield call(postTestimony, action.payload)
    yield put(postTestimonySuccess(data, action))
    yield put(setAlert({
      title: 'Testimonio creado!',
      icon: 'success',
    }))
  } catch (error) {
    yield put(postTestimonyFailure(error));
      yield put(setAlert({
        title: 'Error',
        text: 'Algo salió mal. Intente nuevamente',
        icon: 'error'
      }))
  }
}

export default function* testimonialsSaga() {
  yield takeEvery(getAllTestimonialsStart, fetchTestimonials);
  yield takeEvery(postTestimonyStart, postTestimonyFetch)
}

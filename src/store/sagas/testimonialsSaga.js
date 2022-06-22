import { call, put, takeEvery } from 'redux-saga/effects'
import { getAllTestimonialsSuccess } from '../slicing/testimonialsSlice'

function* fetchTestimonials() {
    const testimonials = yield call(() => fetch('http://localhost:3000/api/testimonials/all'));
    const formattedTestimonials = yield testimonials.json();
    yield put(getAllTestimonialsSuccess(formattedTestimonials))
 }

function* testimonialsSaga() {
    yield takeEvery('testimonials/getAllTestimonials', fetchTestimonials);
}

export default testimonialsSaga;
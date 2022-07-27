import api from './interceptor';

export const getAllTestimonials = () => api({
  method: 'get',
  url: '/api/testimonies/all',
});

export const postTestimony = (data) => api({
  method: 'POST',
  url: '/api/testimonies',
  data
})

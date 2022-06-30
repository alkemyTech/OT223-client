import api from './interceptor';

const getAllTestimonials = () => api({
  method: 'get',
  url: '/api/testimonials/all',
});

export default getAllTestimonials;

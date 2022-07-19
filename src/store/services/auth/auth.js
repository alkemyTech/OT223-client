import api from '../interceptor';

export const login = (data) => api(
  {
    method: 'post',
    url: '/auth/login',
    data: localStorage.removeItem('token', JSON.stringify(data)),
  }
);

export const register = (data) => api(
  {
    method: 'post',
    url: '/auth/register',
    headers: {
      'Content-type': 'application/json'
    },
    data: JSON.stringify(data),
  }
);
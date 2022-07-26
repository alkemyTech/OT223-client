import api from '../interceptor';

export const login = (user) => api(
  {
    method: 'post',
    url: '/auth/login',
    headers: {
      'Content-type': 'application/json'
    },
    data: JSON.stringify(user),
  }
);

export const register = (user) => api(
  {
    method: 'post',
    url: '/auth/register',
    headers: {
      'Content-type': 'application/json'
    },
    data: JSON.stringify(user),
  }
);
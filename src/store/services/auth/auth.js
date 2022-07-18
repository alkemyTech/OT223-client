import api from '../interceptor';

export const login = () => api(
  {
    method: 'post',
    url: '/auth/login',
  }
).then((response) => response.json())
.catch((error) => {throw error});

export const register = (data) => api(
  {
    method: 'post',
    url: '/auth/register',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data),
  }
).then((response) => response.json())
.catch((error) => {throw error});
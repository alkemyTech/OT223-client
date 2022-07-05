import api from './interceptor';

const getUsers = () => api({
  method: 'get',
  url: '/api/user',
});

export default getUsers;

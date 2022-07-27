import api from './interceptor';

const getUsers = () => api({
  method: 'get',
  url: '/api/user',
});

const deleteUser = () => api({
  method: 'delete',
  url: '/api/user',
});

export { getUsers, deleteUser };

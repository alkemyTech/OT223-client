import api from './interceptor';

const getOrganizationData = () => api({
  method: 'get',
  url: 'organizations/1',
});

export default getOrganizationData;

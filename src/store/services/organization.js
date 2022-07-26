import api from './interceptor';

const getOrganizationData = () => api({
  method: 'get',
  url: 'api/organizations/1/public',
});

export default getOrganizationData;

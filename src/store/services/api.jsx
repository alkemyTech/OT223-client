import axios from 'axios';
import configService from './config';

const Api = axios.create({
  baseUrl: configService.api,
});

export default Api;

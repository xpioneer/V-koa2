import axios from 'axios'

import webConfig from '../../web.config'
import Storage from '../storage'

const Axios = axios.create({
  baseURL: webConfig.host.http,
  timeout: 60000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization-User': 'access_token ' + Storage.get('ACCESSTOKEN')
  },
  transformResponse: [function (data) {
    // return typeof data === 'string' ? JSON.parse(data): data;
    return data;
  }],
});

// Add a request interceptors
Axios.interceptors.request.use(function (config) {
  if (config.headers['Authorization-User'] == "not_access" || !config.headers['Authorization-User']) {
    config.headers['Authorization-User'] = 'access_token ' + Storage.get('ACCESSTOKEN')
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default Axios;
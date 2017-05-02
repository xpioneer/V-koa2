import axios from 'axios'

import webConfig from '../../web.config'
import Storage from '../storage'

const Axios = axios.create({
  baseURL: webConfig.host.http + webConfig.apiPath,
  timeout: 60000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  transformResponse: [function (data) {
    return data;
  }],
  responseType:'json',
});

// Add a request interceptors
Axios.interceptors.request.use(function (config) {
  config.headers['Authorization-User'] = Storage.get('ACCESSTOKEN')
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(response => {
  if(response.status == 200){
    return response.data
  }
  return response;
}, error => {
  return Promise.reject(JSON.parse(JSON.stringify(error)).response.data);//customer
  // return Promise.reject(error);
});

module.exports = Axios
// export default Axios;
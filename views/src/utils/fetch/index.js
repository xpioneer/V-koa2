import * as requestHelpers from './requestHelper';
import fetchWrapper from './src/fetchWrapper';
// import config from '../../web.config'

// base
const postReq = requestHelpers.postReq;
const getReq = requestHelpers.getReq;
const putReq = requestHelpers.putReq;
const delReq = requestHelpers.delReq;
const postAuthReq = requestHelpers.postAuthReq;
const putAuthReq = requestHelpers.putAuthReq;
const getAuthReq = requestHelpers.getAuthReq;
const delAuthReq = requestHelpers.delAuthReq;
const sendRequest = fetchWrapper;

// utils
export const get = (url, header) => {
  return new Promise((resolve, reject) => sendRequest({
    request: getReq(url, header),
    responseType: 'json',
    onSuccess: resolve,
    onError: reject
  }));
};

export const post = (url, data, header) => {
  // if(url.indexOf('/')==0) url=config.RootPath+url;
  return new Promise((resolve, reject) => sendRequest({
    request: postReq(url, data, header),
    responseType: 'json',
    onSuccess: resolve,
    onError: reject
  }));
};

export const put = (url, data, header) => {
  return new Promise((resolve, reject) => sendRequest({
    request: putReq(url, data, header),
    responseType: 'json',
    onSuccess: resolve,
    onError: reject
  }));
};

export const del = (url, header) => {
  return new Promise((resolve, reject) => sendRequest({
    request: delReq(url, header),
    responseType: 'json',
    onSuccess: resolve,
    onError: reject
  }));
};

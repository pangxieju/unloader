import axios from 'axios';
import { throwError } from './throwError';

//过滤请求
axios.interceptors.request.use(
  config => {
    config.timeout = 10 * 1e3; //请求响应时间
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return Promise.resolve(response.data);
    } else if (response.data.code === 1401) {
      return Promise.reject(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  error => {
    if (error && error.response) {
      let res = {};
      res.code = error.response.status;
      res.msg = throwError(error.response.status, error.response);
      return Promise.reject(res);
    }
    return Promise.reject(error);
  }
);

export default function request(method, url, data) {
  method = method.toLocaleLowerCase();
  if (method === 'post') {
    return axios.post(url, data);
  } else if (method === 'get') {
    return axios.get(url, {
      params: data
    });
  } else if (method === 'delete') {
    return axios.delete(url, {
      params: data
    });
  }
}

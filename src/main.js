import axios from 'axios';
import Qs from 'qs';
import { throwError } from './throwError';

// let c = {

// };

// const paramsSerializer = (params) => {
//   if (['get'].includes(params.method)
//     && params.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
//     return Qs.stringify(params, {arrayFormat: 'brackets'})
//   }
//   return
// };

//过滤请求
axios.interceptors.request.use(
  config => {
    // Object.assign(c, config);

    if (['get'].includes(config.method)
    && config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      // config.paramsSerializer = (params) => {
      //   return Qs.stringify(params, {arrayFormat: 'repeat'});
      // }
      config.transformRequest = [function (params) {
        return Qs.stringify(params, {arrayFormat: 'repeat'});
      }]
    };

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    console.log(response.status);
    console.log(response.data);

    console.log('````````````````````````````````````````````');
    if (response.status === 200) {

    }
    if (~[12000].indexOf(response.data.code)) {
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

// export default function(config) {
//   Object.assign(c, config);
//   // console.log(Object.keys(axios));
//   // axios.call(this);
//   this.get = axios.get;
// };
export default class {
  constructor(params) {
    console.log(params);
    Object.assign(axios.defaults, params);
    console.log(axios.defaults);
    this.get = axios.get;
  }
}

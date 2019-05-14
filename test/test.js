const api = require('..');
// const axios = require('axios');
// global.axios = axios;
// console.log();
let Api = new api({
  baseURL: 'http://127.0.0.1:9666',
  // headers: {
  //   common: {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   post: {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   }
  // },
  interceptors: {}
});
// axios.defaults.headers.common['token'] = token;
let url = '/'; //'https://wap.woapi.net/v1/home';
Api.post(url, {
  // headers: {
  //   'Content-Type': 'application/json'
  // },
  firstName: 'Fred',
  lastName: 'Flintstone',
  params: {
    a: 1,
    b: 2
  }
}, {
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // }
})
  .then(response => {
    console.log('response:', JSON.stringify(response));
  })
  .catch(error => {
    console.log('error:', error);
  });

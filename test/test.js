const api = require('..');
const axios = require('axios');
global.axios = axios;
console.log();
let Api = new api({
  baseURL: 'http://127.0.0.1:9666',
  headers: {
    common: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  },
  interceptors: {}
});
let url = '/'; //'https://wap.woapi.net/v1/home';
Api.get(url, {
  // headers: {
  //   'Content-Type': 'application/json'
  // },
  params: {
    a: 1,
    b: 2
  }
})
  .then(response => {
    console.log('response:', JSON.stringify(response));
  })
  .catch(error => {
    console.log('error:', error);
  });

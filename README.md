```
// 初始化配置
let Api = new api({
  baseURL: 'http://127.0.0.1:9666',
  headers: {
    common: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  },
  interceptors: {
    request(config) {

    },
    response(config) {

    }
  }
});



api.post('/', {}, {
  model: {
    request() {},
    response() {}
  },
}).then()
```


```
src
  - api
  - dataModel
    - request
    - response
```

1、状态码
2、请求头 支持 JWT
3、挂载请求，响应模型
4、状态码事件
5、
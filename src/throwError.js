export const throwError = (status, url) => {
  const message = new Map([
    [400, `请求错误`],
    [401, `未授权，请登录`],
    [403, `拒绝访问`],
    [404, `请求地址出错: ${url}`],
    [408, `请求超时`],
    [500, `服务器内部错误`],
    [501, `服务未实现`],
    [502, `网关错误`],
    [503, `服务不可用`],
    [504, `网关超时`],
    [505, `HTTP 版本不受支持`]
  ]);

  return message.get(status)
};



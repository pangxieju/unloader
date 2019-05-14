const express = require('express');
const app = express();
const Path = require('path');
const bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const port = 9666
// dist设置为静态路径
app.use('/', express.static(Path.resolve(__dirname, '../../dist')));

const log = (req) => {
  // console.log(req);
  console.log('headers:', req.headers);
  console.log('body:', req.body);
  console.log('url:', req.url);
  console.log('method:', req.method);
  console.log('params:', req.params);
  console.log('query:', req.query);
  console.log('-------------------------------------');
};

// GET method route
app.get('/', function (req, res) {
  log(req);
  res.send({user: '234234'});
});

// POST method route
app.post('/', urlencodedParser, function (req, res) {
  log(req);
  // console.log('post:', req.body);
  res.send({ok: 200});
});

app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
})
const express = require('express');
const app = express();
const Path = require('path');

const port = 9666
// dist设置为静态路径
app.use('/', express.static(Path.resolve(__dirname, '../../dist')));

const R = (req) => {
  console.log('headers:', req.headers);
  console.log('url:', req.url);
  console.log('method:', req.method);
  console.log('params:', req.params);
  console.log('query:', req.query);
  console.log('-------------------------------------');
};

// GET method route
app.get('/', function (req, res) {
  R(req);
  res.send({user: '234234'});
});

// POST method route
app.post('/', function (req, res) {
  R(req);
  res.send({ok: 200});
});

app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
})
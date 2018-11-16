const express = require('express');
const app = express();
const Path = require('path');

const port = 9666
// dist设置为静态路径
app.use('/', express.static(Path.resolve(__dirname, '../../dist')));


// GET method route
app.get('/', function (req, res) {
  res.send({user: '234234'});
});

// POST method route
app.post('/', function (req, res) {
  console.log(req.query.q );
  res.send({ok: 200});
});

app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
})
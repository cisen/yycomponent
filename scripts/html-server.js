/**
 * Created by cisen on 6/8/17.
 */
var path = require('path');
var express = require('express');
var ROOT_PATH = path.join(__dirname,"../");
var app = express();

//设置静态资源目录
app.use('/', express.static('_site'));

app.get('/index*', function (req, res) {
  res.sendFile(path.join(ROOT_PATH, '_site/'));
});

app.get('/docs*', function (req, res) {
  res.sendFile(path.join(ROOT_PATH, '_site/'));
});

app.listen(2233, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + 2233);
});

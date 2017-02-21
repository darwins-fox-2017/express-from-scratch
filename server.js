var express = require('express');

var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index')
var user = require('./routes/user')

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/',index)
app.use('/user',user)
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000);

module.exports = app;

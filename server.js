'use strict'
const express = require('express')
var path = require('path');
var bodyParser = require('body-parser');


let index = require('./routes/index')
let users = require('./routes/users')
let usersApi = require('./routes/api/users')

let app = express()


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/users', users);
app.use('/api/users', usersApi);


app.listen(4000)

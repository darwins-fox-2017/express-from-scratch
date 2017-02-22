"use strict"
const express = require('express');
var path      = require('path');
let app       = express();
const router  = require('./routes/index');
var bodyParser= require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000);

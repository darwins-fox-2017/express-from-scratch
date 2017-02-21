'use strict'

const express = require('express')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/',routes)


app.listen(3000)

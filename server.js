'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

let app = express()

let index = require('./routes/index')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index)

app.listen(3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

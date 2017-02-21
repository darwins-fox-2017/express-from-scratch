'use strict'

const express = require('express')
let index = require('./routes/index')

let app = express()

app.use('/', index);


app.listen(4000)

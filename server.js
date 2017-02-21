'use strict'

const express = require('express')
let index = require('./routes/index')
let users = require('./routes/users')

let app = express()

app.use('/', index);
app.use('/users', users);


app.listen(4000)

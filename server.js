'use strict'

const express = require('express')
let index = require('./routes/index')
let users = require('./routes/users')
let usersApi = require('./routes/api/users')

let app = express()

app.use('/', index);
app.use('/users', users);
app.use('/api/users', usersApi);


app.listen(4000)

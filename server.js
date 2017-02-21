'use strict'

const express = require('express')

let app = express()

app.get('/', function(request, response){
  response.send("Hacktiv8 is Awesome coding bootcamp")
})


app.listen(4000)

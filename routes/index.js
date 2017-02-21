let routes = require('express').Router()

routes.get('/', function(request, response) {
  response.render('index')
})

module.exports = routes;

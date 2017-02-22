let routes = require('express').Router()

let Model = require('../models')

routes.get('/', function(request, response) {
  Model.User.findAll().then(function(users) {
    response.render('users/index', {title: 'Users',users: users})
  }).catch(function(err){
    res.render('/',{warning : "Users not found"})
  })
})

routes.get('/createuser', function(request, response){
  response.render('users/createuser', {title: 'Create User'})
})

routes.post('/createuser', function(request, response){
  Model.User.create(request.body).then(function(){
    response.redirect('/users')
  })
})

routes.get('/edituser/:id', function(request, response) {
  Model.User.findById(request.params.id).then(function(data){
    response.render('users/edituser', {title: 'Edit User', user:data})
  })
})

routes.post('/edituser/:id', function(request, response){
  Model.User.update({
    firstname : request.body.firstname,
    lastname : request.body.lastname,
    phone : request.body.phone
  }
  ,{where:{id : request.params.id}}).then(function(){
    response.redirect('/users')
  })
})

routes.get('/deleteuser/:id', function(request, response){
    Model.User.destroy({
    where: {id : request.params.id}}).then(function(){
      response.redirect('/users')
    })
})

module.exports = routes;
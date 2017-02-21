let routes = require('express').Router()

let Model = require('../models')

routes.get('/', function(request, response) {
  Model.User.findAll().then(function(users) {
    response.render('view_user', {users: users})
  }).catch(function(err){
    res.render('/',{warning : "Data not found"})
  })
})

routes.get('/new', function(request, response){
  response.render('add_user')
})

routes.post('/create', function(request, response){
  Model.User.create({
    firstname : request.body.firstname,
    lastname : request.body.lastname,
    phone : request.body.phone
  }).then(function(){
    response.redirect('/user')
  })
})

routes.get('/edit/:id', function(request, response) {
  Model.User.findById(request.params.id).then(function(data){
    response.render('edit_user', {users:data})
  })
})

routes.post('/update/:id', function(request, response){
  Model.User.update({
    firstname : request.body.firstname,
    lastname : request.body.lastname,
    phone : request.body.phone
  }
  ,{where:{id : request.params.id}}).then(function(){
    response.redirect('/user')
  })
})

routes.get('/delete/:id', function(request, response){
    Model.User.destroy({
    where: {id : request.params.id}}).then(function(){
      response.redirect('/user')
    })
})

module.exports = routes;

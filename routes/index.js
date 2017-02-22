const routes = require('express').Router()
const models = require('../models')

routes.get('/', function(request, response) {
  models.User.findAll().then(function (Users){
    response.render('index', {title: "Test", Users: Users})
  })
})

routes.post('/create', function(req, res, next) {
  models.User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone
  }).then(function() {
    res.redirect('/');
  })
})

routes.get('/edit/:id', function(req, res, next) {
  models.User.findById(req.params.id).then(function(User) {
    res.render('edit', {User : User, title: "Edit data"})
  })
})

routes.post('/update', function(req, res, next) {
  models.User.update({
    firstname: req.body.username,
    lastname: req.body.lastname,
    phone: req.body.phone
  }, {
    where: {id : req.body.id}
  }).then(function() {
    res.redirect('/')
  })
})

routes.get('/delete/:id', function(req, res, next) {
  models.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect('/')
  })
})


module.exports = routes

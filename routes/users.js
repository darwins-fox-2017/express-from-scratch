var express = require('express');
var router = express.Router();
let db = require('../models')

router.get('/', function(request, response){
  db.User.findAll().then((users) => {

    response.render('users/index', {users: users})
  })
})

// router.get('/new', function(req, res, next){
//   res.send('want to create a new user ?')
// })

router.get('/new', function(req, res, next){
  res.render('users/create')
})
// Show
router.get('/:id', function(request, response, next){
  db.User.find({
    where:{
      id: request.params.id
    }
  }).then((user) => {
    response.render('users/show', {user: user})
  })
})

router.get('/:id/edit', function(request, response, next){
  db.User.find({
    where:{
      id: request.params.id
    }
  }).then((user) => {
    response.render('users/edit', {user: user})
  })
})

router.post('/create', function(req, res, next){

  db.User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone
  }).then(() => {
    res.redirect('/users')
    // res.send('user created succesfully')
  })
})

router.post('/:id/update', function(req, res, next){
  db.User.update({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone
  }, {
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/users')

    // res.send('user updated succesfully')
  })
})
//
router.get('/:id/delete', function(req, res, next){
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/users')
    // res.send('user deleted succesfully')
  })
})

module.exports = router;


const routes = require('express').Router()
const models = require('../models');

routes.get('/',function(req,res){
  models.User.findAll().then(function(users){
    res.render('index', {data: users});
  })
})

routes.post('/create',function(req,res){
  models.User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    createdAt: new Date(),
    updtaedAt: new Date()
  }).then(function(){
    res.redirect('/')
  })
})

routes.get('/update/:id',function(req,res){
  models.User.findById(req.params.id).then(function(user){
    res.render('update',{data: user})
  })
})

routes.post('/update/:id',function(req,res){
  models.User.update(
    {
      firstname : req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      updatedAt: new Date()
    }
    ,{where: {id : req.params.id}}).then(function(){
    res.redirect('/')
  })
})

routes.get('/delete/:id',function(req,res){
  models.User.destroy({where : {id : req.params.id}}).then(function(){
    res.redirect('/')
  })
})

module.exports = routes

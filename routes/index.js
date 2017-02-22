"use strict"

const express = require('express');
let app       = express.Router();
let models    = require('../models')

// app.get('/', function(req, res){
//   res.render('index', {title: 'User List'});
// })

app.get('/', function(req, res){
  models.User.findAll({raw:true}).then(function(data){
    res.render('index', {title: 'User List', dataUser: data});
  })
})

app.post('/', function(req, res){
  models.User.create(
    {
      firstname : req.body.firstname,
      lastname:req.body.lastname,
      phone:req.body.phone
    }).then(function(data){
      res.redirect('/');
  })
})

app.get('/update/:id',function(req,res){
  // let id = req.param('id')
  var idGetUpdate = req.params.id
  models.User.findById(idGetUpdate).then(function(data){
    res.render('update',{data:data})
  })
})

app.post('/doUpdate',function(req,res){
  var idPostUpdate = req.body.data_id
  models.User.findById(idPostUpdate).then(function(data){
    if(data){
      data.updateAttributes(
        {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          phone: req.body.phone
        })
    }
      res.redirect('/')
  })
})

app.get('/delete/:id',function(req,res){
  var idDelete = req.params.id
  models.User.findById(idDelete).then(function(data){
    if(data){
      data.destroy({
        where:{
          data:req.body.id
        }
      })
    }
      res.redirect('/')
  })
})

module.exports = app;

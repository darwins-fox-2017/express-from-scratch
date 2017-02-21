"use strict"

const express = require ('express')
let app = express.Router()
let models = require("../models")

app.get("/",function(req, res){
  models.User.findAll().then(function(users){
    res.render('index',{users:users})
  })
})

app.post("/create", function(req, res){
  models.User.create({
    firstName:req.body.first_name,
    lastName:req.body.last_name,
    phone:req.body.phone
  }).then(function(users){
    res.redirect("/")
  })
})

app.get('/update/:id', function(req, res){
  models.User.findById(req.params.id).then(function(user){
    res.render('edit',{user:user})
  })
})

app.post('/update/:id', function(req, res){
  models.User.findById(req.params.id).then(function(users){
    users.update({
      firstName:req.body.first_name,
      lastName:req.body.last_name,
      phone:req.body.phone
    })
    res.redirect('/')
  })
})

app.get('/delete/:id', function(req, res){
  models.User.findById(req.params.id).then(function(user){
    if (user) {
      user.destroy({
        where:{
          user:req.body.id
        }
      })
    }
    res.redirect("/")
  })
})

module.exports = app

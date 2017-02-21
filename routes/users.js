var express = require('express');
var router = express.Router();
let db = require('../models')

router.get('/', function(request, response){
  response.send("Hacktiv8 is Awesome coding bootcamp")
})

// router.get('/new', function(req, res, next){
//   res.send('want to create a new user ?')
// })

router.post('/', function(req, res, next){
  db.User.create({
    firstname: req.query.firstname,
    lastname: req.query.lastname,
    email: req.query.email
  }).then((){
    res.send('user created succesfully')
  })
})

router.put('/', function(req, res, next){
  res.send('user updated succesfully')
})

router.delete('/', function(req, res, next){
  res.send('user deleted succesfully')
})

module.exports = router;

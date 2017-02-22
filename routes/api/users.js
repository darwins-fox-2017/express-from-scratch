var express = require('express');
var router = express.Router();
let db = require('../../models')

router.get('/', function(request, response){
  db.User.findAll().then((users) => {

    response.send(users)
  })
})

// router.get('/new', function(req, res, next){
//   res.send('want to create a new user ?')
// })

router.get('/:id', function(request, response, next){
  db.User.find({
    where:{
      id: request.params.id
    }
  }).then((user) => {

    response.send(user)
  })
})

router.post('/', function(req, res, next){
  db.User.create({
    firstname: req.query.firstname,
    lastname: req.query.lastname,
    phone: req.query.phone
  }).then(() => {
    res.send('user created succesfully')
  })
})

router.put('/:id', function(req, res, next){
  db.User.update({
    firstname: req.query.firstname,
    lastname: req.query.lastname,
    phone: req.query.phone
  }, {
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.send('user updated succesfully')
  })
})

router.delete('/:id', function(req, res, next){
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.send('user deleted succesfully')
  })
})

module.exports = router;

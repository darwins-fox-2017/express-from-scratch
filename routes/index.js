var express = require('express');
var router = express.Router();
let model = require('../models');
router.get('/',function(req,res,next){
 model.User.findAll().then(function(users){
   res.render('index',{dataUsers:users})
 })
});




module.exports = router;

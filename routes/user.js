var express = require('express');
var router = express.Router();
let model = require('../models');

router.get('/new',function(req,res,next){
   res.render('create',{firstname:"",lastname:"",phone:"",head:"CREATE USER"});
})

router.post('/insert',function(req,res,next){
   //console.log(req.body.firstname);
   if (req.body.firstname) {
     model.User.create({first_name:req.body.firstname,last_name:req.body.lastname,phone:req.body.phone}).
     then(function(){
        res.redirect('/')
     })
   } else {
     console.log('else');
   }
})

router.get('/viewedit/:id',function(req,res,next){
  model.User.findOne({where:{id:req.params.id}})
  .then(function(user){
    res.render('edit',{firstname:user.first_name,lastname:user.last_name,phone:user.phone,head:"EDIT USER",id:user.id});
  })
})

router.post('/postedit/:id',function(req,res,next){
   //console.log(req.body.firstname);
   if (req.body.firstname) {
     model.User.update({first_name:req.body.firstname,last_name:req.body.lastname,phone:req.body.phone},
       {where:{
         id:req.params.id
       }}).
     then(function(){
        res.redirect('/')
     })
   } else {
     console.log('else');
   }
})

router.get('/delete/:id',function(req,res,next){
   model.User.destroy({where:{
     id:req.params.id
   }})
   .then(function(){
     res.redirect('/')
   })
});

module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(request, response){

  // response.send("Hacktiv8 is Awesome coding bootcamp")
  response.render('index')
})

module.exports = router;

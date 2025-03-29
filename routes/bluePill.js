var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.sendFile(__dirname+'../bluePill.html');
});

module.exports = router;

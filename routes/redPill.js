var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.sendFile('redPill.html');
});

module.exports = router;

var express = require('express');
var router = express.Router();

var Q = require("q");
var fs = require('fs');
var formidable = require('formidable');
var fn = require('../common/fn');


router.get('/getTest',function(req, res, next){
  var result = { success:false, msg:null };
  try {
    var typePath = req.query.typePath;
    res.send(result);
  } catch (e) {
    LOGGER.error('admin->getTest:',e);
    result.msg = e.toString();
    res.send(result);
  }
});

module.exports = router;

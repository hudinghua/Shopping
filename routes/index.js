var express = require('express');
var router = express.Router();

const config = require('../config');
const wechat = require('../BBL/wechat');

var wechatApp = new wechat(config);

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index');
});
router.get('/canvas', function(req, res, next) {
  	res.render('canvas');
});

router.get('/valid', function(req, res, next) {
	wechatApp.auth(req,res);
});

router.get('/getAccessToken',function(req,res){
    wechatApp.getAccessToken().then(function(data){
        res.send(data);
    });    
});
module.exports = router;

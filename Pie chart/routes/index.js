var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Revenue = require('../models/revenue');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/getData',function(req,res,next){

       Revenue.find(function(err,revenue){
           if(err){
        	res.json({'message':'something went wrong with the database'});
                  }
           else{
            res.json(revenue);   
            }

       }) 
})
router.get('/bars',function(req,res){
	res.render('bar');
})

module.exports = router;

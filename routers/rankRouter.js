var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var User = require('../models/breweryModel.js');

router.put('/',function(req,res){
  console.log('in router.put', req.body);
  var query = {place_id: req.body.place_id};
  User.update(query, {$push:{clientID: req.body.clientID}}, function(err, userResults){
    if(err){
        console.log('error occurred', err);
        res.sendStatus(500);
      } else {
        console.log(userResults);
        res.send(userResults);
      }
    });
});
module.exports = router;

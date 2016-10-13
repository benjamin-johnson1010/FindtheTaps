var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var User = require('../models/breweryModel.js');


router.post('/',function(req, res){
  var sentData = req.body;
  console.log('sentData', sentData);
  var newUser = new User({
    place_id: sentData.place_id,
    name: sentData.name
  });
  User.count({place_id: sentData.place_id}, function(err, count){
    console.log('hi',count);
    if(count >0){
      res.sendStatus(200);
    }
    else{
  newUser.save(function(err){
    if(err){
    console.log('error occurred:', err);
    res.sendStatus(500);
  }
  else{
    //sent back new pet after being stored in database
    console.log('success', newUser);
    res.send(newUser);
  }

  });
  }
  });
  });

router.put('/',function(req,res){
  console.log('in router.put', req.body);
  var query = {place_id: req.body.place_id};
  User.update(query, {rank: req.body.rank}, function(err, userResults){
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

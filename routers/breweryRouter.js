var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var User = require('../models/breweryModel.js');


router.get('/',function(req, res){
  console.log('in router.get');
  User.find({}, function(err, userResults){
    if(err){
        console.log('error occurred', err);
        res.sendStatus(500);
      } else {
        console.log('hit else', userResults);

        res.send(userResults);
      }
    });
});

router.post('/',function(req, res){
  var sentData = req.body;
  console.log('sentData', sentData);
  var newBrewery = new User({
    place_id: sentData.place_id,
    name: sentData.name
  });
  newBrewery.save(function(err){
    if(err){
    console.log('error occurred:', err);
    res.sendStatus(500);
  }
  else{
    //sent back new pet after being stored in database
    console.log('success', newBrewery);
    res.send(newBrewery);
  }
  });
  });
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

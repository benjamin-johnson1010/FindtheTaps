var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

  var User = require('../models/userModel.js');

  //get the objects from the databse to send back
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
    var newUser = new User({
      clientID: sentData.clientID,
      name: sentData.name
    });
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
    });
  module.exports = router;

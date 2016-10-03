var express = require('express');
var app = express();
var mongoose = require('mongoose');

//Database connection
var connection = require('../modules/connection');
mongoose.connect(connection);

//body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// require and use index router
var index = require('../routers/index');
app.use('/', index);

//require and user pets router
var pets = require('../routers/');
app.use('/', );

// static files
app.use(express.static('public'));

// server listen port
var portDecision = process.env.PORT || 3000;

var server = app.listen(portDecision, function() {
  var port = server.address().port;
  console.log('Listening on', port);
});

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require( 'path' );
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
var beer = require('../routers/beerRouter');
app.use('/beer', beer);

// static files
app.use(express.static('public'));

// server listen port
var portDecision = process.env.PORT || 8080;

var server = app.listen(portDecision, function() {
  var port = server.address().port;
  console.log('Listening on', port);
});

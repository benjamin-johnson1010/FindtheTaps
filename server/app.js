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

//require and use beer router
var beer = require('../routers/beerRouter');
app.use('/beer', beer);
//require and use brewery router
var brewery = require('../routers/breweryRouter');
app.use('/brewery', brewery);
//require and use rank router
var rank = require('../routers/rankRouter');
app.use('/rank', rank);
// static files
app.use(express.static('public'));

// server listen port
var portDecision = process.env.PORT || 3000;

var server = app.listen(portDecision, function() {
  var port = server.address().port;
  console.log('Listening on', port);
});

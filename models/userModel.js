var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

clientID: String,
name: String,
location: [{location: String,
rank: Number}],
// rating: Number
});

var User = mongoose.model('users', userSchema);
module.exports = User;

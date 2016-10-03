var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
userName: userName,
location: location
});

var User = mongoose.model('users', userSchema);
module.exports = User;

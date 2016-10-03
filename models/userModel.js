var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
userName: String,
location: String,
rating: Number
});

var User = mongoose.model('users', userSchema);
module.exports = User;

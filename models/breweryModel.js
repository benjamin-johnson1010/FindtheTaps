var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var brewerySchema = new Schema({
name: String,
place_id: String,
clientID: [String],
rank: String

});
var User = mongoose.model('brewery', brewerySchema);
module.exports = User;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var User = new Schema({
	id: {type: Number},
	FirstName: {type: String},
	LastName: {type: String},
	Pseudo: {type: String},
	Mail: {type: String},
	Passwd: {type: String},
	Token: {type: String},
	TokenExp: {type: Date},
},{
	collection: 'articles'
});

module.exports = mongoose.model('User', User);
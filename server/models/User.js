var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var User = new Schema({
	FirstName: 	{type: String, required:true},
	LastName: 	{type: String, required:true},
	Pseudo: 	{type: String, required:true},
	Mail: 		{type: String, required:true},
	Passwd: 	{type: String, required:true},
	Token: 		{type: String},
	TokenExp: 	{type: Date}
},{
	collection: 'users'
});

module.exports = mongoose.model('User', User);
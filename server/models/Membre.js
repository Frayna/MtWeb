var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Membre = new Schema({
	pseudo: 	{type: String, required:true},
	mail: 		{type: String, required:true},
	passwd: 	{type: String, required:true},
	Token: 		{type: String},
	TokenExp: 	{type: Date}
},{
	collection: 'membres'
});

module.exports = mongoose.model('Membre', Membre);
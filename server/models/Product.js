// ServerPort.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Product = new Schema({
	name: {
		type: String
	},
	desc: {
		type: String
	}
},{
	collection: 'products'
});

module.exports = mongoose.model('Product', Product);
// ServerPort.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Product = new Schema({
	name: {type: String},
	img: {type: String},
	desc: {type: String},
	molecule: {type: String},
	principe: {type: String},
	voie: {type: String},
	dangerosite: {type: String},
	vente: {type: Boolean},
	venteFR: {type: Boolean},
	wiki: {type: Array},
	descFull: {type: String}

},{
	collection: 'products'
});

module.exports = mongoose.model('Product', Product);
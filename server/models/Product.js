var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Product = new Schema({
	name: {type: String, required:true},
	img: {type: String},
	desc: {type: String, required:true},
	molecule: {type: String, required: true},
	principe: {type: String},
	voie: {type: String, required: true},
	dangerosite: {type: String},
	vente: {type: Boolean},
	venteFR: {type: Boolean},
	wiki: {type: String},
	descFull: {type: String, required: true}
},{
	collection: 'products'
});

module.exports = mongoose.model('Product', Product);
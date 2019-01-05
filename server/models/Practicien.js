var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
// Define collection and schema for Items
var Practicien = new Schema({
	nom: {type: String},
	prenom: {type: String},
	specialite: {type: ObjectId},
	note: {type: ObjectId},
	content: {type: String},
},{
	collection: 'practiciens'
});

module.exports = mongoose.model('Practicien', Practicien);
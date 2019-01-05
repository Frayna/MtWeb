var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Article = new Schema({
	id: {type: Number},
	titre: {type: String},
	img: {type: String},
	desc: {type: String},
	content: {type: String},
},{
	collection: 'articles'
});

module.exports = mongoose.model('Article', Article);
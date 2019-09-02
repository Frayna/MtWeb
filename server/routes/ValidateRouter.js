const express = require('express');
const ValidateRouter = express.Router();
const User = require('../models/User');

ValidateRouter.route('').get(function (req, res) {
	User.find({activation : req.query.token}, function (err, users) {
		if (err){
			console.log("error");
			res.send(err);
		}
		//TODO créer modele membre et ajout BDD, cookie et connexion
		console.log("activation", req.body);
		console.log("result", users);
		res.json(users);
	});
//	let result = queryUser();
//	console.log(result);
});

module.exports = ValidateRouter;
const express = require('express');
const ValidateRouter = express.Router();
const User = require('../models/User');

ValidateRouter.route('/').get(function (req, res) {
	User.find({activation : req.query.code}, function (err, users) {
		if (err){
			console.log("error");
			res.send(err);
		}
		console.log("activation", req.query.code);
		console.log("result", users);
		res.json(users);
	});
//	let result = queryUser();
//	console.log(result);
});

module.exports = ValidateRouter;
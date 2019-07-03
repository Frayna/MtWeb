const express = require('express');
const app = express();
const TestRouter = express.Router();
const nodeMailer = require("nodemailer");


TestRouter.route('/send').post(function (req, res) {
	console.log("SUBJECT :" + req.body.subject);
	console.log("MESSAGE :" + req.body.message);
	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	let transporter = nodeMailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			// should be replaced with real sender's account
			user: 'transgenre.eu.test@gmail.com',
			pass: 'jeflechat'
		}
	});
	let mailOptions = {
		// should be replaced with real recipient's account
		to: 'helena.gourrand@gmail.com',
		subject: req.body.subject,
		text: req.body.message
	};
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log('Message %s sent: %s', info.messageId, info.response);
	});
	res.json('test');
});

module.exports = TestRouter;
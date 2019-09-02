const express = require('express');
const UserRouter = express.Router();
const User = require('../models/User');
const uniqid = require('uniqid');
const nodeMailer = require("nodemailer");


UserRouter.route('/').post(function (req, res) {
    req.body.passwd = require('crypto').createHash('sha256').update(req.body.passwd).digest('hex');
    const user = new User(req.body);
    user.activation = uniqid();
    console.log("adding");
    user.save()
        .then(user => {
            let transporter = nodeMailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    // should be replaced with real sender's account

                    //TODO Securiser ça
                    user: 'transgenre.eu.test@gmail.com',
                    pass: 'jeflechat'
                }
            });
            let mailOptions = {
                // should be replaced with real recipient's account
                to: user.mail,
                subject: "Acitvation de votre compte",
                //TODO mettre adresse serveur
                html: '<div>' +
                    'https://localhost:4200/validate?token=' + user.activation +
                    '</div>'
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message %s sent: %s', info.messageId, info.response);
            });
            res.json('User added successfully');
            console.log("User upload success !");
        })
        .catch(err => {
            let b = {};
            for(k in err.errors) {
                b[k] = err.errors[k].kind;
            }
            console.log(req.connection.remoteAddress);
            console.log("User upload failed !");
            console.table(b);
            res.status(400).send(b);
        });
});
UserRouter.route('').get(function (req,res) {

})


module.exports = UserRouter;
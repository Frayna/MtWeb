const express = require('express');
const app = express();
const UserRouter = express.Router();
const User = require('../models/User');

UserRouter.route('/add').post(function (req, res) {
    const user = new User(req.body);
    console.log("adding");
    user.save()
        .then(user => {
            res.json('Product added successfully');
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

module.exports = UserRouter;
// server.js

const express = require('express');
var https = require ('https');
var fs = require('fs');
var http = require('http');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 4200;
const cors = require('cors');

const config = require('./database/DB');
const ProductRouter = require('./routes/ProductRouter');
const UserRouter = require('./routes/UserRouter');
const TestRouter = require('./routes/TestRouter');
const ValidateRouter = require('./routes/ValidateRouter');

var privateKey  = fs.readFileSync('./sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('./sslcert/server.cert', 'utf8');
var credentials = {key: privateKey, cert: certificate};

mongoose.connect(config.DB).then(
	() => {console.log('Database is connected') },
	err => { console.log('Can not connect to the database' +err)
	});

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/product', ProductRouter);
app.use('/user', UserRouter);
app.use('/test', TestRouter);
app.use('/validate', ValidateRouter);
var httpsServer = https.createServer(credentials, app);


httpsServer.listen(PORT, function(){
    console.log('Server HTTPS is running on Port: ',PORT);
});
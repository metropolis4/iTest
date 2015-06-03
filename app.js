var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var mongoConfig = require('./config/mongo.js');

mongoose.connect(mongoConfig.dev);

var api       = require('./controllers/api.js');
var dataModel = require('./models/data.js');
var data      = require('./models/log-data/log-data.js');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));

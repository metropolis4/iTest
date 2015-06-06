var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var mongoConfig = require('./config/mongo.js');

mongoose.connect(mongoConfig.dev);

var api  = require('./controllers/api.js');
var Data = require('./models/data.js');
var data = require('./models/log-data/log-data.js');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/displayAll', api.displayAll);
app.get('/displayByRequest/:httpMethod', api.displayRequestType);
app.get('/displayByResponse/:code', api.displayResponseCode);
app.get('/domainPercentage/:domain', api.domainPercentage);

var server = app.listen(5097, function() {
  console.log('Express server listening on port ' + server.address().port);
});

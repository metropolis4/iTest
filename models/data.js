var mongoose = require('mongoose');

var dataSchema = mongoose.Schema({
  host            : String,
  time            : String,
  request         : String,
  HttpResponseCode: String,
  dataBytes       : String
});

module.exports = mongoose.model('Data', dataSchema);

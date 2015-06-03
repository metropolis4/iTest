var Data = require('../models/data.js');

module.exports = {
  displayAll: function (req, res) {
    Data.find({}, function (err, result) {
      if(err) throw err;
      res.send(result);
    });
  },
  findByHost: function (req, res) {
    Data.find({host: req.params.host}, function (err, result) {
      res.send(result);
    });
  },
  findByDate: function (req, res) {
    Data.find({time: req.params.time}, function (err, result) {
      res.send(result);
    });
  }
};

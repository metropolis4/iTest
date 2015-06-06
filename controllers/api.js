var Data = require('../models/data.js');

module.exports = {
  displayAll: function (req, res) {
    Data.find({}, function (err, result) {
      if(err) throw err;
      res.send(result);
    });
  },
  displayRequestType: function (req, res) {
    var reqType = req.params.httpMethod;
    Data.count({request: new RegExp(reqType, 'i')}, function (err, result) {
      if(err) throw err;
      res.send(result + " entries are of the type " + reqType + "\n");
    });
  },
  displayResponseCode: function (req, res) {
    var resType = req.params.code;
    Data.count({HttpResponseCode: resType}, function (err, result) {
      if(err) throw err;
      res.send(result + " entries received a response code of " + resType + "\n");
    });
  },
  domainPercentage: function (req, res) {
    var domainName = req.params.domain;
    Data.count({}, function (err, count) {
      if(err) throw err;
      var total = count;
      Data.count({host: new RegExp(domainName, 'i')}, function (err, result) {
        if(err) throw err;
        var domainPercent = (result / count) * 100;
        domainPercent = domainPercent.toFixed(1);
        res.send(domainPercent + "% of entries came from the domain: " + domainName + "\n");
      });
    });
  }
};

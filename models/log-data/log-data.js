var Data = require('../data.js');
var zlib = require('zlib');
var fs   = require('fs');
var _    = require('underscore');

var inputData = './node_data_code_test-master/data/access.log.gz';

fs.exists('./log-data.txt', function (exists) {
  if(!exists) {
    fs.readFile(inputData, function (err, data) {
      if(err) throw err;
      zlib.gunzip(data, function (err, unzippedData) {
        if(err) throw err;
        fs.writeFile('./log-data.txt', unzippedData, function (err) {
          if(err) throw err;
          console.log('writeFile complete');
        });
      });
    });
  }
});

fs.readFile('./log-data.txt', function (err, logData) {
  var dataFromLog = logData.toString().split("\n");
  _.map(dataFromLog, function(val){
      var data = val.split(' ');
      var dataEntry = {
        host            : data[0],
        time            : data[3] + data[4],
        request         : data[5] + data[6] + data[7],
        HttpResponseCode: data[8],
        dataBytes       : data[9]
      };
      var newData = new Data(dataEntry);
      newData.save(function (err, result) {
        if(err) throw err;
        console.log("data successfully loaded: ", result);
      });
    });
});

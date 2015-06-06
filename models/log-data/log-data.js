var Data = require('../data.js');
var zlib = require('zlib');
var fs   = require('fs');
var splitter = require('split');

fs.createReadStream('./node_data_code_test-master/data/access.log.gz')
  .pipe(zlib.createGunzip())
  .pipe(splitter())
  .on('data', function(line) {
    line = line.split(' ');
    var dataEntry = {
        host            : line[0],
        time            : line[3] + line[4],
        request         : line[5] + line[6] + line[7],
        HttpResponseCode: line[8],
        dataBytes       : line[9]
      };
    var newData = new Data(dataEntry);
      newData.save(function (err, result) {
        if(err) throw err;
        console.log("data successfully loaded: ", result);
      });
  });

const fs = require("fs");
const path = require("path");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const models = require('./database/models');
const csv  = require('csv');
const csvParse = require('csv-parse');
var input = fs.createReadStream(filename);
var parser = csv.parse({
  columns: true,
  relax: true
});
var inserter = async.cargo(function(tasks, inserterCallback) {
    model.bulkCreate(tasks).then(function() {
        inserterCallback(); 
      }
    );
  },
  1000
);
parser.on('readable', function () {
  while(line = parser.read()) {
    inserter.push(line);
  }
});
parser.on('end', function (count) {
  inserter.drain = function() {
    doneLoadingCallback();
  }
});
input.pipe(parser);
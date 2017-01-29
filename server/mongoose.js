var config = require('./config');
var mongoose = require('mongoose');


module.exports.connect = function(cb) {

  var db = mongoose.connect(config.db.uri, config.db.options, function(err) {
    if (err) {

      console.log('Could not connect to db');
      console.log(err);

    } else {
      console.log('Connected to MongoDB');
      if (cb){
        cb(db);
      }
    }
  });
};

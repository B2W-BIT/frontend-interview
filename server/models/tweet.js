var mongoose = require('mongoose');

var tweetSchema = new mongoose.Schema({
  twid        : String
  , active     : Boolean
  , author     : String
  , avatar     : String
  , body       : String
  , date       : Date
  , screenname : String
});

tweetSchema.statics.getTweets = function(page, skip, cb) {


  var start = (page * 10) + (skip * 1);


  this.find({}, 'twid active author avatar body date screenname',
            {skip: start, limit : 10})
            .sort({date: 'desc'})
            .exec(cb);
};

var Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;

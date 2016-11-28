var express = require('express');
var app = express();  
var path = require('path');
var Twitter = require('twitter');
var Flickr = require('node-flickr')
 
var client = new Twitter({
  consumer_key: 'islSDzqun7mLndT9THKxXxKTu',
  consumer_secret: '9VTzyioIbpnvvKFJ6ynkVI0FGfi7Ieg0fGms9N9E5WP1Cz3JjR',
  access_token_key: '802361788562079744-DnHQYshmb2ykfRjbqUc0jO589nehP9t',
  access_token_secret: 'wuCyFZFQqgSGH0Z0mKLqWDSbR8zTwZmuWegFRoAkIV7zV'
});

var key = {
  api_key: '3de470a3de4c9510ec040b59100b4cf2'
};

flickr = new Flickr(key);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/flickr', function(req, res) {
  flickr.get('photos.getRecent', {'tags': 'nature'}, function(err, result){
      if (err) return console.error(err);

    res.json(result.photos);
  });
});

app.get('/users/show', function(req, res) {
  client.get('/users/show', {screen_name: 'americanascom'}, function(err, user, response) {
      if (err) return console.error(err);

    res.json(user);
  });
});

app.get('/config/reset-id', function(req, res) {
    max_id = undefined;
});

app.get('/statuses/tweets', function(req, res) {
  var params = {
    screen_name: 'americanascom',
    count: 10,
    exclude_replies: true
  };

  client.get('statuses/user_timeline', params, function(err, tweets, response) {
      if (err) return console.error(err);
    res.json(tweets);
  });
});

app.get('/statuses/tweets_rts', function(req, res) {
  var params = {
    screen_name: 'americanascom',
    count: 5,
    max_id: max_id
  };

  client.get('statuses/user_timeline', params, function(err, tweets, response) {
      if (err) return console.error(err);

    max_id = tweets[tweets.length - 1].id;
    res.json(tweets);
  });
});

app.get('/users/suggestions', function(req, res) {
  client.get('users/suggestions/entretenimento', function(err, suggestions, response) {
      if (err) return console.error(err);

    res.json(suggestions.users);
  });
});

app.get('/trends/place', function(req, res) {
  client.get('/trends/place', {id: 23424768}, function(err, trends, response) {
      if (err) return console.error(err);
    
    res.json(trends[0].trends);
  });
});

app.use(express.static(__dirname + '/public'));
app.use('/modules', express.static(__dirname + '/node_modules'));

var server = app.listen(3000);
console.log('Start', server.address().port);
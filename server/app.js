var express = require('express');
var React = require('react');
var { renderToString } = require('react-dom/server');

var app = express.Router();
var Tweet = require('./models/tweet');
var TweetList = require('../client/components/TweetList');


app.get('/', (req, res) => {
  Tweet.getTweets(0, 0, function(err, tweets) {


    var markup = renderToString(<TweetList data={tweets} />);

    res.render('index',{
      markup: markup,
      state: JSON.stringify(tweets)
    });
  });
});

app.get('/page/:page/:skip', (req, res) => {
  Tweet.getTweets(req.params.page, req.params.skip, function(err, tweets) {
    res.send(tweets);
  });
});

module.exports = app;

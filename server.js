var bodyParser = require("body-parser");
var express = require('express');
var https = require('https');
var twit = require('twit');
var node_flickr = require("node-flickr");
var cache = require('apicache').options({ debug: true }).middleware;

var app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        next();
    }
);

var twitter = new twit({
    consumer_key: '2JCYDzEk0HMW4FtpyNaceUsYT',
    consumer_secret: '3EGQTDdeRpnl6Q3UulneUrFt6CiwACRNJ1pU5sBWZzDljOoxV0',
    app_only_auth: true,
    timeout_ms: 60*1000
});

var flickr = new node_flickr({ api_key: "5baa42ee42e7bafb117f519eab34ebe8" });

app.get('/getProfileLookup', cache('90 seconds'), function(req, res) {

    req = 'users/lookup';
    var options = {
        screen_name: 'americanascom'
    };

    return twitterGet(req, res, options);
});

app.get('/getFollowing', cache('90 seconds'), function(req, res) {

    var cursor = req.query.cursor !== '' && typeof req.query.cursor !== 'undefined' ? req.query.cursor : '-1';
    req = 'friends/list';
    var options = {
        screen_name: 'americanascom',
        cursor: cursor,
        count: 100
    };

    return twitterGet(req, res, options);
});

app.get('/getFollowers', cache('90 seconds'), function(req, res) {

    var cursor = req.query.cursor !== '' && typeof req.query.cursor !== 'undefined' ? req.query.cursor : '-1';
    req = 'followers/list';
    var options = {
        screen_name: 'americanascom',
        cursor: cursor,
        count: 100
    };

    return twitterGet(req, res, options);
});

app.get('/getTweets', cache('90 seconds'), function(req, res) {

    var max_id = req.query.max_id !== '' && typeof req.query.max_id !== 'undefined' ? req.query.max_id : null;
    req = 'statuses/user_timeline';
    var options = {
        screen_name: 'americanascom',
        exclude_replies: true,
        count: 100
    };

    if(max_id !== null) {
        options.max_id = max_id;
    }

    return twitterGet(req, res, options);
});

app.get('/getTweetsReplies', cache('90 seconds'), function(req, res) {

    var max_id = req.query.max_id !== '' && typeof req.query.max_id !== 'undefined' ? req.query.max_id : null;
    req = 'statuses/user_timeline';
    var options = {
        screen_name: 'americanascom',
        exclude_replies: false,
        count: 100
    };

    if(max_id !== null) {
        options.max_id = max_id;
    }

    return twitterGet(req, res, options);
});

app.get('/getMedia', cache('90 seconds'), function(req, res) {

    var max_id = req.query.max_id !== '' && typeof req.query.max_id !== 'undefined' ? req.query.max_id : null;
    req = 'statuses/user_timeline';
    var options = {
        screen_name: 'americanascom',
        exclude_replies: true,
        count: 100
    };

    if(max_id !== null) {
        options.max_id = max_id;
    }

    return twitterGet(req, res, options);
});

app.get('/getLikes', cache('90 seconds'), function(req, res) {

    var max_id = req.query.max_id !== '' && typeof req.query.max_id !== 'undefined' ? req.query.max_id : null;
    req = 'favorites/list';
    var options = {
        screen_name: 'americanascom',
        count: 100
    };

    if(max_id !== null) {
        options.max_id = max_id;
    }

    return twitterGet(req, res, options);
});

app.get('/getUserSuggestions', cache('30 minutes'), function(req, res) {

    //Slug = twitter
    req = 'users/suggestions/esporte/members';
    var options = {};

    return twitterGet(req, res, options);
});

app.get('/getTrends', cache('90 seconds'), function(req, res) {

    req = 'trends/place';
    var options = {
        //Brazilian ID = 23424768
        id: 23424768,
        count: 10
    };

    return twitterGet(req, res, options);
});

app.get('/getFlickrImage', cache('90 seconds'), function(req, res) {

    var hashtag = req.query.hashtag;

    flickr.get('photos.search', { 'text': hashtag, 'per_page': '100' }, function(error, result) {
        console.log(error);
        if (error) {
            res.json({
                data: { error: error }
            });
        }
        else {
            res.json({
                data: result.photos
            });
        }
    });

    return res;
});

function twitterGet(req, res, options) {

    twitter.get(req, options).catch(function(error) {
        console.log(error.stack);
        res.json({
            data: error
        });
    })
    .then(function (result) {
        res.json({
            data: result.data
        });
    });

    return res;
}

app.use(function(req, res) {
    res.sendFile('index.html', { root : __dirname});
});

app.listen(3000);

console.log("Server listening on port 3000, check it out at http://localhost:3000 :)");

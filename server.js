var express = require('express');
var app = express();	
var path = require('path');
var Twitter = require('twitter');
var Flickr = require('node-flickr')
 
var client = new Twitter({
	bearer_token: 'AAAAAAAAAAAAAAAAAAAAAJSzvgAAAAAAt2mzRyqFBQjkbxw0N13s0OqUIjY%3DIvZ1rHbc5hxfecsi7BUmYPTmY2aaNmVLidToCZWz6lOC0jpSco'
});

var key = {
	api_key: 'b1bb1660f2317a8f5b4ee5aa9313a24f'
};

flickr = new Flickr(key);

/* GET das Fotos do Flickr */
app.get('/flickr', function(req, res) {
	flickr.get('photos.getRecent', {'tags': 'nature'}, function(err, result){
	    if (err) return console.error(err);

		res.json(result.photos);
	});
});

/* GET das Infos do Usuario */
app.get('/users/show', function(req, res) {
	client.get('/users/show', {screen_name: 'americanascom'}, function(err, user, response) {
	    if (err) return console.error(err);

		res.json(user);
	});
});

app.get('/config/reset-id', function(req, res) {
    max_id = undefined;
});

/* GET dos Tweets */
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

/* GET dos Tweets com Retweets */
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

/* GET da Box Who to Follow */
app.get('/users/suggestions', function(req, res) {
	client.get('users/suggestions/entretenimento', function(err, suggestions, response) {
	    if (err) return console.error(err);

		res.json(suggestions.users);
	});
});

/* GET dos Trends */
app.get('/trends/place', function(req, res) {
	client.get('/trends/place', {id: 23424768}, function(err, trends, response) {
	    if (err) return console.error(err);
		
		res.json(trends[0].trends);
	});
});

app.use(express.static(__dirname + '/public'));
app.use('/modules', express.static(__dirname + '/node_modules'));

var server = app.listen(3000);
console.log('Servidor iniciado na porta', server.address().port);
var http = require('http'),
	fs = require('fs'),
	request = require('request');

http.createServer(function(req, res) {
	request({
		uri: 'https://api.twitter.com/oauth2/token',
		method: 'POST',
		headers: {
			Authorization: 'Basic bWVjaTllbUI3MjA1Ymo0VzQ0eFFDQVRVNjowR0RKWWFUeDg1bkRwbm9pOHp3R2EwVDdNU1FJT1J0OVJkS3Y2aEFmRFNSb0QzUjRGUA=='
		},
		json: true,
		form: {grant_type:'client_credentials'}
	}, function(err, tokenResult) {
		request({
			uri: 'https://api.twitter.com/1.1' + req.url,///statuses/user_timeline.json?screen_name=americanascom',
			headers: {
				Authorization: 'Bearer ' + tokenResult.body.access_token
			}
		}, function(err, result) {
			res.writeHead(200, {
				'Access-Control-Allow-Origin': '*'
			});
			res.end(result.body);
		});

	});

}).listen(8000);


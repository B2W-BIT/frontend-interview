
var https = require('https');
var twit  = require('twit');


var twitter = new twit({
    consumer_key: 'oOHvEEqw1tznuRjotkDCjMZLA',
    consumer_secret: 'SCTOe0mwqM8RNLqmz00C4oyTpEAuhpBWgYx1eP6yERFFNZWINp',
    app_only_auth: true,
    timeout_ms: 60*1000
});

// Opens App Routes
module.exports = function(app) {

    /**
     * Get tweets without replies
     */
    app.get('/tweets', function(req, res) {
        var max_id = req.query['last_tweet_id']
        var replies = req.query['exclude_replies'];

        req = 'statuses/user_timeline';
        var options = {
            user_id: 35019751,
            max_id: max_id,
            exclude_replies: replies,
            count: 200
        };
        
        if (max_id === undefined || max_id === "") delete options.max_id;
        if (replies === undefined || replies === "") options.exclude_replies = true;

        return twitterGet(req, res, options);
    });


    /**
     * Get acount informations
     */
    app.get('/lookup', function(req, res) {
        req = 'users/lookup';
        var options = {
            user_id: 35019751
        };

        return twitterGet(req, res, options);
    });

    /**
     * Get followes
     */
    app.get('/suggestions', function(req, res){
        req = 'users/suggestions/esporte/members';
        return twitterGet(req, res, {});
    });

    /**
     * Get trend topics
     */
    app.get('/trends', function(req, res){
        req = '/trends';

        var options = {
            id: 1 //Mundial trends
        };

        return twitterGet(req, res, options);
    })


    

}

function twitterGet(req, res, options) {

    twitter.get(req, options).catch(function(error) {
        console.log(error.stack);
        res.json({
            data: error
        });
    })
    .then(function (result) {
        res.json(result.data);
    });

    return res;
}
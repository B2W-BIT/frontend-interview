
//Set up dependencies
var express     = require('express');
var https       = require('https');
var bodyParser  = require('body-parser');
var twit        = require('twit');



//Set up port when application listen
var port = process.env.PORT;

var app = express();

var twitter = new twit({
    consumer_key: 'oOHvEEqw1tznuRjotkDCjMZLA',
    consumer_secret: 'SCTOe0mwqM8RNLqmz00C4oyTpEAuhpBWgYx1eP6yERFFNZWINp',
    app_only_auth: true,
    timeout_ms: 60*1000
});

//Config
app.use(express.static(__dirname + '/dist/')); // Angular app directory
app.use(bodyParser.json());                                     // parse application/json
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});


//Routes
app.get('/tweets', function(req, res) {
    var max_id = req.query['last_tweet_id']
    req = 'statuses/user_timeline';
    var options = {
        user_id: 35019751,
        max_id: max_id,
        exclude_replies: true,
        count: 200
    };
    
    if (max_id === undefined || max_id === "") delete options.max_id;

    return twitterGet(req, res, options);
});

app.get('/lookup', function(req, res) {
    req = 'users/lookup';
    var options = {
        user_id: 35019751
    };

    return twitterGet(req, res, options);
});


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

// Listen (start app)
app.listen(port || 3000);
console.log('App listening on port ' + port);

module.exports = app; 


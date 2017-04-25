var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Twitter = require('twitter');

var Flickr = require("node-flickr");
var keys = {"api_key": "254db21af5c0c436b445b5d64b16d7e7"}
flickr = new Flickr(keys);

// var Flickr = require("flickrapi"),
//     flickrOptions = {
//       api_key: "254db21af5c0c436b445b5d64b16d7e7",
//       secret: "b99830b1f2b55220"
//     };

// Flickr.authenticate(flickrOptions, function(error, flickr) {
//     console.log(flickr);
// });

var client = new Twitter({
    consumer_key: '4qf7cWYHg2LTCuHIBr1iW1iGZ',
    consumer_secret: '25aWKqcAbO6BmhfdiPyUXCFYsXxJ5md31zaHynwB3xh8zTBUJU',
    access_token_key: '3346580987-8rxSfDEu9Y7cQfrwoJIWYwakfNhrjYehCiEw72C',
    access_token_secret: 'kCWkG2gFJeZJhRjn6663NFUfFTF64yv3klk6N6n65ztlE'
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = 8090;

var router = express.Router();

router.get('/', function (req, res) {
    if (req.query.count) {
        client.get(req.query.call, { screen_name: 'americanascom', count: req.query.count }, function (error, tweets, response) {
            if (!error) {
                res.json(tweets);
            }
        });
    } else {
        client.get(req.query.call, { screen_name: 'americanascom' }, function (error, tweets, response) {
            if (!error) {
                res.json(tweets);
            }
        });
    }

});

router.get('/flickr', function (req, res) {

    flickr.get("photos.search", {"tags":req.query.search}, function(err, result){
    if (err) return console.error(err);
    console.log(result.photos);
    res.json(result.photos.photo.map((e) => 'https://farm'+ e.farm +'.staticflickr.com/'+ e.server +'/'+ e.id +'_'+ e.secret +'.jpg'));
});
   
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', router);

app.listen(port);
console.log('It works!')
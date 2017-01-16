var twitterApi = require('twitter-node-client').Twitter;

var twitter = new twitterApi({
    consumerKey: "meci9emB7205bj4W44xQCATU6",
    consumerSecret: "0GDJYaTx85nDpnoi8zwGa0T7MSQIORt9RdKv6hAfDSRoD3R4FP"
});

var error = function error(err) {
    console.log('Deu xabusis: ');
    console.log(err);
};

var api = {
    tweets: function tweets(req, res) {
        var count = req.query.count;
        var maxId = req.query.max_id;
        twitter.getUserTimeline({ screen_name: 'americanascom', count: count, max_id: maxId }, error, function(response) {
            res.send(response);
        });
    },
    user: function user(req, res) {
        twitter.getUser({ screen_name: 'americanascom' }, error, function(response) {
            res.send(response);
        });
    }
};

module.exports = api;
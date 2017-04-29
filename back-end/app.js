var app = require('./config/app_config');
var Twitter = require('twitter');

app.get('/', function(req, res){
    res.json({nome: 'Jonathan'});
});
 
var client = new Twitter({
  consumer_key: 'qgfRKlFRNNtBv2WxCdAIStDjr',
  consumer_secret: 'hetqMLBcMMFI9sCgtnrVluWms6nZk1tvKdVDbrGgefOkHJVMLN',
  access_token_key: '72102783-07zmWMeCNmcYikrewOpk3zANEWhJPlL8aIH0UJpar',
  access_token_secret: 'vrELXMqeUMKQMNCIK9yOidY6k3ge3iCDV63Zim0K80lzL'
});
 
var params = {screen_name: 'americanascom'};
var one_way = [];
var users_to_display = [];


app.get('/tweets', function(req, res){
    client.get('statuses/user_timeline', { screen_name: 'americanascom', count: 30 }, function(error, tweets, response) {
        if (!error) {
            res.status(200).json(tweets);
        }
        else {
           res.status(500).json({ error: error });
        }
     });
});
 
 app.get('/bio', function(req, res){
    client.get('statuses/user_timeline', { screen_name: 'americanascom', count: 1 }, function(error, tweets, response) {
        if (!error) {
            res.status(200).json(tweets);
        }
        else {
           res.status(500).json({ error: error });
        }
     });
});

 app.get('/seguidores', function(req, res){
    client.get('users/show', { screen_name: 'americanascom'}, function(error, seguidores_resultado, response) {
        if (!error) {
           res.status(200).json(seguidores_resultado.followers_count);
           console.log(seguidores_resultado.followers_count);
        }
        else {
           res.status(500).json({ error: error });
        }
     });
});

 app.get('/seguindo', function(req, res){
    client.get('users/show', { screen_name: 'americanascom'}, function(error, seguidores_resultado, response) {
        if (!error) {
           res.status(200).json(seguidores_resultado.friends_count);
        }
        else {
           res.status(500).json({ error: error });
        }
     });
});

 app.get('/fotoCapa', function(req, res){
    client.get('users/show', { screen_name: 'americanascom'}, function(error, fotoCapa, response) {
        if (!error) {
           res.status(200).json(fotoCapa.profile_banner_url);
        }
        else {
           res.status(500).json({ error: error });
        }
     });
});
import express from 'express';
import exphbs from 'express-handlebars';
import TwitterClient from './twitter';

const app = new express();
const twitterClient = new TwitterClient();

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  twitterClient.getTweets()
  .then(tweets => {
    twitterClient.getUserInfo().then(user => {
      res.render('home', user);
    });
  })
});

app.route('/twitter/user')
  .get((req, res) => {
    twitterClient.getUserInfo().then(user => {
      res.json(user);
    });
  });

app.route('/twitter/tweets/')
  .get((req, res) => {
    twitterClient.getTweets().then(tweets => {
      res.json(tweets);
    });
  });

app.route('/twitter/tweets/from/:id')
  .get((req, res) => {
    twitterClient.getTweets(req.params.id).then(tweets => {
      res.json(tweets);
    });
  });

app.route('/twitter/followers')
  .get((req, res) => {
    twitterClient.getFollowers().then(tweets => {
      res.json(tweets);
    });
  });

app.route('/twitter/friends/list')
  .get((req, res) => {
    twitterClient.getSuggestions().then(tweets => {
      res.json(tweets);
    });
  });

export default app;

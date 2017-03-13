/* eslint-disable angular/json-functions */
import express from 'express';
import {twitterApi} from '../lib/twitter-api';

const app = express();

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/user/:screen_name', (req, res) => {
  const screenName = req.params.screen_name;
  twitterApi.getUser(screenName)
    .then(user => {
      const jsonUser = JSON.parse(user);
      res.status(200).json(jsonUser);
    });
});

app.get('/user/:screen_name/timeline', (req, res) => {
  const screenName = req.params.screen_name;
  const count = req.query.count;
  const maxId = req.query.max_id;
  const excludeReplies = req.query.exclude_replies;

  twitterApi.getUserTimeline(screenName, count, maxId, excludeReplies)
    .then(tweets => {
      const jsonTweets = JSON.parse(tweets);
      res.status(200).json(jsonTweets);
    });
});

app.get('/user/:screen_name/profile_banner', (req, res) => {
  const screenName = req.params.screen_name;

  twitterApi.getUserProfileBanner(screenName)
    .then(tweets => {
      const jsonTweets = JSON.parse(tweets);
      res.status(200).json(jsonTweets);
    });
});

app.get('/trends', (req, res) => {
  twitterApi.getTrends()
    .then(trends => {
      const jsonTrends = JSON.parse(trends);
      res.status(200).json(jsonTrends);
    });
});

app.listen(8000);


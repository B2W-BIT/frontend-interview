import express from 'express';
import {getUser} from '../lib/twitter-api';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/user/:screen_name', (req, res) => {
  const screenName = req.params.screen_name;
  getUser(screenName)
    .then(user => {
      /* eslint-disable angular/json-functions */
      const jsonUser = JSON.parse(user);
      res.status(200).json(jsonUser);
    });
});

app.listen(8000);


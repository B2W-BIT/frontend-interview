import path from 'path';
import webpack from 'webpack';
import config from './webpack.config';

import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';

const router = express.Router();
const app = express();

import timeline_route from './api/timeline';
import profile_route from './api/profile';

const compiler = webpack(config);

app.use(express.static(__dirname + '/client'));

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use('/', router);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Accept', 'application/vnd.github.v3+json');
    next();
});

app.use('/timeline', timeline_route);
app.use('/profile', profile_route);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.route('/').get((req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

var server = app.listen(process.env.PORT || 3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  const { host, port } = server.address();

  console.log('App listening at port %s ...', port);
});

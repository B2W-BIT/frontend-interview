require('css-modules-require-hook')({
  generateScopedName: '[path][name]-[local]',
});
require('babel-register');

var express = require('express');
var chokidar = require('chokidar');
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);
var exphbs = require('express-handlebars');



var twitter = require('twitter');

var configs = require('./server/config');
var streamHandler = require('./server/streamHandler');
var mongoose = require('./server/mongoose');

var app = express();

// Serve hot-reloading bundle to client
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Include server routes as a middleware
app.use(function(req, res, next) {
  require('./server/app')(req, res, next);
});

// Do "hot-reloading" of express stuff on the server
// Throw away cached modules and re-require next time
// Ensure there's no important state in there!
var watcher = chokidar.watch('./server');

watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Clearing /server/ module cache from server");
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id];
    });
  });
});

// Do "hot-reloading" of react stuff on the server
// Throw away the cached client modules and let them be re-required next time
compiler.plugin('done', function() {
  console.log("Clearing /client/ module cache from server");
  Object.keys(require.cache).forEach(function(id) {
    if (/[\/\\]client[\/\\]/.test(id)) delete require.cache[id];
  });
});

app.use("/", express.static(__dirname + "/client/public/"));


var io = require('socket.io')({}).listen(app.listen(3000, '0.0.0.0',
function(err) {
  if (err) throw err;
  console.log('server listening on port 3000');
}));
mongoose.connect();

var client = twitter(configs.twitter);

var trackFilter = {track: 'americanascom'};


client.stream('statuses/filter', trackFilter, function(stream) {
  streamHandler(stream, io);
});

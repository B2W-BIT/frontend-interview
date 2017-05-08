'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpack3 = require('../webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*Custom imports*/
// import { } from './routes'

/* Bootstraping */
var app = (0, _express2.default)();
// const MongoClient = mongodb.MongoClient
/*Vendor imports*/
var http = _http2.default.Server(app);

// Webpack Requirements
if (process.env.NODE_ENV === 'development') {
    var compiler = (0, _webpack2.default)(_webpack4.default);
    app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpack4.default.output.publicPath }));
    app.use((0, _webpackHotMiddleware2.default)(compiler));
}

app.set('view engine', 'ejs');

app.use(_express2.default.static('build'));

app.use('/static', _express2.default.static('static'));

// UserRoutes(app)

app.get('*', function (req, res) {
    res.render('index', { env: process.env.NODE_ENV });
});

http.listen(process.env.PORT || 8000, function () {
    console.log('listening on *:8000');
});
module.exports = process.env.NODE_ENV === 'production' ? require('./webpack.config.prod.js') : require('./webpack.config.base.js');

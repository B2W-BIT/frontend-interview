var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
    app.route('/tweets').get(api.tweets);

    app.route('/user').get(api.user);

};
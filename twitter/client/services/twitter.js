/* globals angular:false */

var services;
services = angular.module('app.services');

services.factory('TwitterService', function TwitterService($resource, TWITTER_API) {
    return $resource(TWITTER_API, {}, {
        tweets: {
            method: 'GET',
            url: TWITTER_API + '/tweets',
            isArray: true
        },
        user: {
            method: 'GET',
            url: TWITTER_API + '/user',
            isArray: false
        }
    });
});

services.factory('twitter', function twitter(helpService, TwitterService, TWITTER_QUANTITY_TWEETS_GET) {
    
    return {
        _readingTweets: false,
        moreTweets: function moreTweets(arrayTweets) {
            if (this._readingTweets) return;
            var max_id = (helpService.last(arrayTweets)).id;
            this._readingTweets = true;
            this.getTweets(TWITTER_QUANTITY_TWEETS_GET + 1, max_id).then(function(response) {
                response.shift();
                for (var index = 0; index < response.length; index++) arrayTweets.push(response[index]);
                this._readingTweets = false;
            }.bind(this)).catch(function() {
                this._readingTweets = false;
            }.bind(this));
        },
        getTweets: function(count, maxId) {
            if (!count) count = TWITTER_QUANTITY_TWEETS_GET;
            return TwitterService.tweets({ count: count, max_id: maxId }).$promise;
        },
        getUser: function getUser() {
            return TwitterService.user().$promise;
        }
    }

});

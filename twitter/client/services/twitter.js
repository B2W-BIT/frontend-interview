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
        moreTweets: function moreTweets(arrayTweets, excludeReplies, onlyMedia) {
            if (this._readingTweets) return;
            var max_id = arrayTweets.length ? (helpService.last(arrayTweets)).id_str : null;
            this._readingTweets = true;
            this.getTweets(TWITTER_QUANTITY_TWEETS_GET + 1, excludeReplies, max_id).then(function(response) {
                if (arrayTweets.length) response.shift();
                helpService.forEach(response, function(tweet) {
                    if (onlyMedia && helpService.isEmpty(tweet.entities.hashtags) && helpService.isEmpty(tweet.entities.media)) return;
                    arrayTweets.push(tweet);
                });
                this._readingTweets = false;
            }.bind(this)).catch(function() {
                this._readingTweets = false;
            }.bind(this));
        },
        getTweets: function(count, excludeReplies, maxId) {
            if (!count) count = TWITTER_QUANTITY_TWEETS_GET;
            if (!helpService.isBool(excludeReplies)) excludeReplies = true;
            return TwitterService.tweets({ count: count, max_id: maxId, exclude_replies: excludeReplies }).$promise;
        },
        getUser: function getUser() {
            return TwitterService.user().$promise;
        }
    }

});

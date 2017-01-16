var app = angular.module('app.directives');

app.controller('profileDetailsController', function profileDetailsController($q, helpService, twitter) {

    $q.all([twitter.getTweets(), twitter.getUser()]).then(helpService.spread(function (tweets, user) {
        this.tweets = tweets;
        this.user = user;
    }.bind(this)));

    this.moreTweets = function moreTweets() {
        twitter.moreTweets(this.tweets);
    };

});
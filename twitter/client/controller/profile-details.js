var app = angular.module('app.directives');

app.controller('profileDetailsController', function profileDetailsController($q, helpService, twitter) {

    $q.all([twitter.getTweets(), twitter.getUser()]).then(helpService.spread(function (tweets, user) {
        this.tweets = tweets;
        this.user = user;
    }.bind(this)));

    this.tweetsHeaderOptions = [
        { text: 'Tweets', active: true, exclude_replies: true, only_media: false },
        { text: 'Tweets & replies', active: false, exclude_replies: false, only_media: false },
        { text: 'Media', active: false, exclude_replies: false, only_media: true }
    ];

    this.moreTweets = function moreTweets() {
        var option = helpService.find(this.tweetsHeaderOptions, function (option) {
            return option.active;
        });
        twitter.moreTweets(this.tweets, option.exclude_replies, option.only_media);
    };

    this.selectHeaderOptionsActive = function selectHeaderOptionsActive(indexSelected) {
        helpService.forEach(this.tweetsHeaderOptions, function (option, index) {
            option.active = index === indexSelected;
        });
        this.tweets = [];
        this.moreTweets();
    };



});
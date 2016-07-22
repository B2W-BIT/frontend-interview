var app = angular.module('Twitter', ['ngResource', 'ngSanitize']);

app.controller('TweetList', function($scope, $resource, $timeout) {

    /**
     * init controller and set defaults
     */
    function init () {
      $scope.preventFOUC = true;

      // set a default username value
      $scope.username = "americanascom";
      
      // prevent interpolate error by setting empty string instead of undefined
      $scope.joinedDate = "";

      // empty tweet model
      $scope.tweetsResult = [];

      $scope.getTweets();
    }

    /**
     * requests and processes tweet data
     */
    function getTweets (paging) {

      var params = {
        action: 'user_timeline',
        user: $scope.username
      };

      if ($scope.maxId) {
        params.max_id = $scope.maxId;
      }

      // create Tweet data resource
      $scope.tweets = $resource('/tweets/:action/:user', params);

      // GET request using the resource
      $scope.tweets.query( { }, function (res) {

        if( angular.isUndefined(paging) ) {
          $scope.tweetsResult = [];
        }

        $scope.tweetsResult = $scope.tweetsResult.concat(res);

        $scope.userBanner = $scope.tweetsResult[0].user.profile_banner_url;
        $scope.userBgColor = $scope.tweetsResult[0].user.profile_background_color;
        $scope.userPicture = $scope.tweetsResult[0].user.profile_image_url; //TODO: get hi-res picture with specific API call
        $scope.userName = $scope.tweetsResult[0].user.name;
        $scope.screenName = $scope.tweetsResult[0].user.screen_name;
        $scope.verified = $scope.tweetsResult[0].user.verified;
        $scope.userDescription = $scope.tweetsResult[0].user.description;
        $scope.userLocation = $scope.tweetsResult[0].user.location;
        $scope.joinedDate = $scope.tweetsResult[0].user.created_at;
        $scope.fullURL = $scope.tweetsResult[0].user.entities.url.urls[0].expanded_url;
        $scope.friendlyURL = $scope.tweetsResult[0].user.entities.url.urls[0].display_url;
        $scope.userTweets = $scope.tweetsResult[0].user.statuses_count;
        $scope.userFollowers = $scope.tweetsResult[0].user.followers_count;
        $scope.userFriends = $scope.tweetsResult[0].user.friends_count;
        $scope.userFavs = $scope.tweetsResult[0].user.favourites_count;
        $scope.preventFOUC = false;

        // for paging - https://dev.twitter.com/docs/working-with-timelines
        $scope.maxId = res[res.length - 1].id;

        // render tweets with widgets.js
        $timeout(function () {
          twttr.widgets.load();
        }, 30);
      });
    }

    /**
     * binded to @user input form
     */
    $scope.getTweets = function () {
      $scope.maxId = undefined;
      getTweets();
    }

    /**
     * binded to 'Get More Tweets' button
     */
    $scope.getMoreTweets = function () {
      getTweets(true);
    }

    init();
    getTweets();
});


app.filter('prettyDate', function () {
    return function (prettyDate) {
		    return prettyDate.substr(4, 3) + ' ' + prettyDate.substr(26, 4);
    };
});
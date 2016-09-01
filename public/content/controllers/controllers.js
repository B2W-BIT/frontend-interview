var app = angular.module("twitterApp", ['infinite-scroll']);
var url_base = "http://localhost:3000";

/* General Controller - Infos from User */
app.controller("generalCtrl", function($scope, $http) {
    $http.get(url_base + "/users/show").then(function (response) {
    	$scope.user = response.data;

        // Get the original size of Profile Image
        $scope.user.profile_image_url = $scope.user.profile_image_url.replace("_normal", "");

        // Format the Date
        var formatDate = $scope.user.created_at

        $scope.user.created_at = formatDate.substr(4,3) + " " + formatDate.substr(26,4);
    });
});


/* Timeline Controller - Tweets and RTS */
app.controller("timelineCtrl", function($scope, $http) {
    // Get Tweets
    $http.get(url_base + "/statuses/tweets").then(function (response) {
        $scope.tweets = response.data;
    });

    // Verify if max_id is undefined
    $http.get(url_base + "/config/reset-id").then(function (response) {
       // max_id undefined
    });

    // Get Tweets with Replies
    $http.get(url_base + "/statuses/tweets_rts").then(function (response) {
        $scope.tweetsAndRts = response.data;
    });

    // Makes the Infinite Scroll
    $scope.busyLoadingData = false;

    $scope.loadMoreTweets = function() {      
        // Verify if scroll is running
        if ($scope.busyLoadingData) {return;}  

        $scope.busyLoadingData = true;

        $http.get(url_base + "/statuses/tweets_rts").then(function (response) {
            $scope.busyLoadingData = false;

            var oldTweets = $scope.tweetsAndRts;

            $scope.tweetsAndRts = response.data;

            var newTweets = oldTweets.concat($scope.tweetsAndRts);

            $scope.tweetsAndRts = newTweets;
        });
    }
});

/* Suggestions Controller - GET Friends Suggestions */
app.controller("suggestionsCtrl", function($scope, $http) {
    $http.get(url_base + "/users/suggestions").then(function (response) {
        $scope.suggestions = response.data;
    });
});

/* Trends Controller - GET Top Trends */
app.controller("trendsCtrl", function($scope, $http) {
    $http.get(url_base + "/trends/place").then(function (response) {
        $scope.trends = response.data;
    });
});

/* Trends Controller - GET Top Trends */
app.controller("flickrCtrl", function($scope, $http) {
    $http.get(url_base + "/flickr").then(function (response) {
        $scope.images = response.data;

        // Get Total Images Recieved
        $scope.totalImages = $scope.images.total;

        // Get Images
        $scope.images = $scope.images.photo;
    });
});
var app = angular.module('app.directives');

app.directive('tweetImage', function tweetImage(flickr, helpService) {

    return {
        restrict : 'E',
        scope: {
            tweet: '='
        },
        template : [
            '<div class="row" ng-if="url">',
            '   <img class="profile-tweet-image" ng-src="{{ url }}" />',
            '</div>'
        ].join(''),
        link: function link(scope) {

            if (scope.tweet.entities.hashtags.length) {
                var tag = helpService.first(scope.tweet.entities.hashtags).text;
                flickr.getPhotos(tag).then(function (response) {
                    scope.url = flickr.getPhotoUrl(helpService.first(response.photos.photo));
                });
            }

        }
    };

});
angular.module('app.timelineController', ['ngSanitize', 'toaster', 'infinite-scroll', 'app.timelineService', 'app.filters'])

.controller('FollowingCtrl', function($scope, timelineService, toaster) {

    $scope.timeline = new timelineService('following');
})

.controller('FollowersCtrl', function($scope, timelineService, toaster) {

    $scope.timeline = new timelineService('followers');
})

.controller('TweetsCtrl', function($scope, timelineService, toaster) {

    $scope.timeline = new timelineService('tweets');
})

.controller('TweetsRepliesCtrl', function($scope, timelineService, toaster) {

    $scope.timeline = new timelineService('tweets-replies');
})

.controller('MediaCtrl', function($scope, timelineService, toaster) {

    $scope.timeline = new timelineService('media');
})

.controller('LikesCtrl', function($scope, timelineService, toaster) {

    $scope.timeline = new timelineService('likes');
});

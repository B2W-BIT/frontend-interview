angular.module('app.timelineTabsController', ['toaster'])

.controller('TabsCtrl', function ($scope) {

    $scope.tabs = [{
        title: 'Tweets',
        url: 'app/desktop/timeline/_tweets.timeline.view.html'
    }, {
        title: 'Tweets & replies',
        url: 'app/desktop/timeline/_tweets-replies.timeline.view.html'
    }, {
        title: 'Media',
        url: 'app/desktop/timeline/_media.timeline.view.html'
    }];

    $scope.currentTab = 'app/desktop/timeline/_tweets.timeline.view.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    };

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    };
});

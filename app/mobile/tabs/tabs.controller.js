angular.module('app.tabsController', ['toaster'])

.component('tabs', {

    templateUrl: 'app/mobile/tabs/tabs.view.html'
})

.controller('TabsCtrl', function ($scope) {

    $scope.tabs = [{
        title: 'Tweets',
        url: 'app/mobile/timeline/_tweets.timeline.view.html'
    }, {
        title: 'Conteúdo multimídia',
        url: 'app/mobile/timeline/_media.timeline.view.html'
    }, {
        title: 'Curtidas',
        url: 'app/mobile/timeline/_likes.timeline.view.html'
    }];

    $scope.currentTab = 'app/mobile/timeline/_tweets.timeline.view.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    };

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    };
});

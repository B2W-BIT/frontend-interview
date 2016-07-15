function UsersTabsController($scope) {

    $scope.onClickUsersTab = function (usersTab) {
        $scope.$parent.currentUsersTab = usersTab.url;
    };

    $scope.isActiveUsersTab = function(usersTabUrl) {
        return usersTabUrl == $scope.$parent.currentUsersTab;
    };
}

angular.module('app.usersTabsController', [])

.component('usersTabs', {

    templateUrl: 'app/desktop/users-tabs/users-tabs.view.html',
    bindings: {
        usersTabs: '=',
        currentUsersTab: '='
    },
    controller: UsersTabsController
});

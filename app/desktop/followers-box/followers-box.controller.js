angular.module('app.followersBoxController', ['toaster'])

.controller('FollowersBoxCtrl', function($http, $scope, toaster) {

    $http.get('getUserSuggestions').success(function(response) {
        if(typeof response.data.errors !== 'undefined') {
            toaster.pop({
                    type: 'error',
                    title: "Twitter API erro " + response.data.errors[0].code,
                    body: response.data.errors[0].message,
                    showCloseButton: true,
                    timeout: 4500
                });
        }
        else {
            $scope.users = response.data;
        }
    });
})

.component('followersBox', {

    templateUrl: 'app/desktop/followers-box/followers-box.view.html'
});

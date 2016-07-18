angular.module('app.trendsBoxController', ['toaster'])

.controller('TrendsBoxCtrl', function($http, $scope, toaster) {

    $http.get('getTrends').success(function(response) {
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
            $scope.trends = response.data[0].trends;
        }
    });
})

.component('trendsBox', {

    templateUrl: 'app/desktop/trends-box/trends-box.view.html'
});

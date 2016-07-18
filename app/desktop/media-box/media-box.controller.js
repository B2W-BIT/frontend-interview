angular.module('app.mediaBoxController', ['toaster'])

.controller('MediaBoxCtrl', function($http, $scope, toaster) {

    $http.get('getMedia').success(function(response) {
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
            $scope.images = response.data;
        }
    });
})

.component('mediaBox', {

    templateUrl: 'app/desktop/media-box/media-box.view.html'
});

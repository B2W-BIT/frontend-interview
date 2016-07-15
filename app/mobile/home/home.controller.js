angular.module('app.homeController', ['ngAnimate', 'toaster'])

.controller('ProfileLookupCtrl', function($scope, $http, $filter, toaster) {

    $scope.loading_screen = true;

    $http.get('getProfileLookup').success(function(response) {
        if(typeof response.data.allErrors !== 'undefined') {
            toaster.pop({
                    type: 'error',
                    title: "Twitter API erro " + response.data.allErrors[0].code,
                    body: response.data.allErrors[0].message,
                    showCloseButton: true,
                    timeout: 4500
                });
        }
        else {
            populateProfileLookup(response.data[0]);
        }
    });

    function populateProfileLookup(data) {

        $scope.profile_banner = data.profile_banner_url;

        //Set original size profile picture
        var profile_image_url = data.profile_image_url;
        profile_image_url = profile_image_url.replace('_normal','');
        $scope.profile_picture = profile_image_url;

        $scope.name = data.name;
        $scope.screen_name = '@' + data.screen_name;
        $scope.description = data.description.replace('http://t.co/vFpTBXqZ', '<a href="http://t.co/vFpTBXqZ" target="_blank">Americanas.com</a>');
        $scope.location = data.location;
        $scope.display_url = data.entities.url.urls[0].display_url;
        $scope.expanded_url = data.entities.url.urls[0].expanded_url;
        $scope.created_at = $filter('date')(new Date(data.created_at), 'MMMM yyyy');
        $scope.total_following = data.friends_count;
        $scope.total_followers = data.followers_count;

        $scope.loading_screen = false;
    }
});

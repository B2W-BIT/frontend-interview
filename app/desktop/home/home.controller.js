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
            $scope.currentUsersTab = 'app/desktop/timeline-tabs/timeline-tabs.view.html';
        }
    });

    function populateProfileLookup(data) {

        $scope.usersTabs = [{
            title: 'Tweets',
            count: kFormatter(data.statuses_count),
            url: 'app/desktop/timeline-tabs/timeline-tabs.view.html'
        }, {
            title: 'Following',
            count: kFormatter(data.friends_count),
            url: 'app/desktop/timeline/_following.timeline.view.html'
        }, {
            title: 'Followers',
            count: kFormatter(data.followers_count),
            url: 'app/desktop/timeline/_followers.timeline.view.html'
        }, {
            title: 'Likes',
            count: kFormatter(data.favourites_count),
            url: 'app/desktop/timeline/_likes.timeline.view.html'
        }];

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
        $scope.created_at = $filter('date')(new Date(prepareDateForAllBrowsers(data.created_at)), 'MMMM yyyy');
        $scope.total_following = data.friends_count;
        $scope.total_followers = data.followers_count;

        $scope.loading_screen = false;

        function kFormatter(num) {
            return num > 999 ? (num/1000).toFixed(1) + 'K' : num;
        }
    }
});

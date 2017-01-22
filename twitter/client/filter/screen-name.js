var filters = angular.module('app.filters');

filters.filter('screenName', function() {
    return function (userScreenName) {
        return userScreenName ? '@' + userScreenName : '';
    };
});
var filters = angular.module('app.filters');

filters.filter('hashtag', function() {
    return function (hash) {
        return hash ? '#' + hash : '';
    };
});
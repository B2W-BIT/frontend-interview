var filters = angular.module('app.filters');

filters.filter('removeText', function() {
    return function (text, remove) {
        return text ? text.replace(remove, '') : '';
    };
});
angular.module('app.filters', []);
angular.module('app.views', []);
angular.module('app.constants', []);
angular.module('app.directives', ['infinite-scroll', 'app.filters']);
angular.module('app.services', ['app.constants', 'ngResource']);

var app = angular.module('app', ['app.services', 'app.directives', 'app.views', 'app.filters', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', { templateUrl : 'profile-details.html' });
});

angular.module('app.mobile.routes', ['ngRoute', 'angularCSS'])

.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider

    .when('/', {
        templateUrl: 'app/mobile/home/home.view.html',
        css: 'app/assets/css/mobile.css'
    })

    .when('/following', {
        templateUrl: 'app/mobile/timeline/_following.timeline.view.html',
        css: 'app/assets/css/mobile.css'
    })

    .when('/followers', {
        templateUrl: 'app/mobile/timeline/_followers.timeline.view.html',
        css: 'app/assets/css/mobile.css'
    })

    .when('/404', {
        templateUrl: 'app/404.html'
    })

    .otherwise ({ redirectTo: '/404' });
});

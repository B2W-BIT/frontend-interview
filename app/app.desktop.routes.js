angular.module('app.desktop.routes', ['ngRoute', 'angularCSS'])

.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider

    .when('/', {
        templateUrl: 'app/desktop/home/home.view.html',
        css: 'app/assets/css/desktop.css'
    })

    .when('/404', {
        templateUrl: 'app/404.html'
    })

    .otherwise ({ redirectTo: '/404' });
});

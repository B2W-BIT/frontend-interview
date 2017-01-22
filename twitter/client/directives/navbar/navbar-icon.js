var app = angular.module('app.directives');

app.directive('navbarIcon', function navbarIcon() {

    return {
        restrict : 'E',
        template : [
            '<i class="fa fa-2x fa-twitter navbar-icon" aria-hidden="true"></i>'
        ].join('')
    };

});
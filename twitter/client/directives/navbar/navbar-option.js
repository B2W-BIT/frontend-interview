var app = angular.module('app.directives');

app.directive('navbarOption', function navbarOption() {

    return {
        restrict : 'E',
        replace: true,
        scope: {},
        template : [
            '<li>',
            '   <a href="#">',
            '       <span class="glyphicon glyphicon-home" aria-hidden="true"></span>',
            '       {{ title }}',
            '   </a>',
            '</li>'
        ].join(''),
        link: function link(scope, element, attrs) {
            scope.title = attrs.title;
        }
    };

});
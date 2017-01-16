var app = angular.module('app.directives');

app.directive('profileImg', function profileImg() {

    return {
        restrict : 'E',
        scope: {
            link: '='
        },
        template : [
            '<img ng-src="{{ link }}" />'
        ].join(''),
        link: function link(scope, element, attrs) {

            element.find('img').addClass(attrs.classImg);

        }
    };

});
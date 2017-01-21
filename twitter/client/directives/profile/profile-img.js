var app = angular.module('app.directives');

app.directive('profileImg', function profileImg($filter) {

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

            var stopWatch = scope.$watch(function () {
                return scope.link;
            }, function () {
                if (!scope.link) return;
                if (attrs.removeText) scope.link = $filter('removeText')(scope.link, attrs.removeText);
                stopWatch();
            });

        }
    };

});
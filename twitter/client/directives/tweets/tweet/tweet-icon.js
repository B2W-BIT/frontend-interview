var app = angular.module('app.directives');

app.directive('tweetIcon', function tweetIcon() {

    return {
        restrict : 'E',
        scope: {
            value: '='
        },
        template : [
            '<i class="fa" ng-class="icon" aria-hidden="true">',
            '   <span class="tweet-main-icons-value" ng-if="value">{{ value }}</span>',
            '</i>'
        ].join(''),
        link: function link(scope, element, attrs) {
            scope.icon = attrs.icon;
        }
    };

});
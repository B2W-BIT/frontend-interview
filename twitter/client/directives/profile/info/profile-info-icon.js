var app = angular.module('app.directives');

app.directive('profileInfoIcon', function profileInfoIcon() {

    return {
        restrict : 'E',
        scope: {
            text: '='
        },
        template : [
            '<div class="row profile-info-name profile-info-data">',
            '   <i class="fa" ng-class="icon" aria-hidden="true"></i>',
            '   <span>{{ text }}</span>',
            '</div>'
        ].join(''),
        link: function link(scope, element, attrs) {
            scope.icon = attrs.icon;
            if (attrs.isLink) element.find('span').addClass('profile-info-description-url');
        }
    };

});

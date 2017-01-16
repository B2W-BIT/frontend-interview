var app = angular.module('app.directives');

app.directive('trend', function trend() {

    return {
        restrict : 'E',
        scope: {},
        template : [
            '<div class="col-md-12 profile-trend">',
            '   <div class="row">',
            '       <span class="profile-trend-hashtag">{{ hash | hashtag }}</span>',
            '   </div>',
            '   <div class="row">',
            '       <span class="profile-trend-count">{{ count }} Tweets</span>',
            '   </div>',
            '</div>'
        ].join(''),
        link: function link(scope, element, attrs) {
            scope.hash = attrs.hash;
            scope.count = attrs.count;
        }
    };

});
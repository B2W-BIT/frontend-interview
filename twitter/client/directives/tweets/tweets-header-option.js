var app = angular.module('app.directives');

app.directive('tweetsHeaderOption', function tweetsHeaderOption() {

    return {
        restrict : 'E',
        scope: {},
        template : [
            '<section class="profile-tweets-option">',
            '   <span>{{ text }}</span>',
            '</section>'
        ].join(''),
        link: function link(scope, element, attrs) {
            scope.text = attrs.text;
            if (attrs.active) element.find('section').addClass('mod-active');
        }
    };

});
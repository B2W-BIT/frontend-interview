var app = angular.module('app.directives');

app.directive('profileCount', function profileCount() {

    return {
        restrict : 'E',
        scope: {
            count: '='
        },
        template : [
            '   <article class="profile-count">',
            '       <div class="row">',
            '           <span class="profile-count-title">{{ title }}</span>',
            '       </div>',
            '       <div class="row">',
            '           <span class="profile-count-data">{{ count }}</span>',
            '       </div>',
            '   </article>'
        ].join(''),
        link: function link(scope, element, attrs) {
            scope.title = attrs.title;
            if (attrs.active) element.find('article').addClass('mod-active');
        }
    };

});
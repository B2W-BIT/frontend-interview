var app = angular.module('app.directives');

app.directive('tweetsHeaderOption', function tweetsHeaderOption() {

    return {
        restrict : 'E',
        scope: {
            active: '=',
            text: '=',
            index: '='
        },
        template : [
            '<section class="profile-tweets-option" ng-class="{ \'mod-active\' : active }" ng-click="ctrl.selectHeaderOption()">',
            '   <span>{{ text }}</span>',
            '</section>'
        ].join(''),
        controller: function tweetsHeaderOptionController($scope) {

            this.selectHeaderOption = function selectHeaderOption() {
                $scope.$parent.ctrl.selectTweetsHeaderOption($scope.index);
            };

        },
        controllerAs: 'ctrl'
    };

});
var app = angular.module('app.directives');

app.directive('navbarSearch', function navbarSearch() {

    return {
        restrict : 'E',
        template : [
            '<form>',
            '   <input type="text" class="form-control mod-search" placeholder="Search Twitter" />',
            '</form>'
        ].join('')
    };

});
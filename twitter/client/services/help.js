var services;
services = angular.module('app.services');

services.factory('helpService', function helpService() {

    return {
        first: function first(collection) {
            return collection[0];
        },
        last: function last(collection) {
            return collection[collection.length - 1];
        },
        random: function ramdom(limMax) {
            return Math.floor((Math.random() * limMax) + 1);
        },
        spread: function spread(func) {
            return function(array) {
                return func.apply(this, array);
            };
        }
    }

});
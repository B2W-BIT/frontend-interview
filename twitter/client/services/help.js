var services;
services = angular.module('app.services');

services.factory('helpService', function helpService() {

    return {
        first: function first(collection) {
            return collection[0];
        },
        forEach: function forEach(collection, fn) {
            if (this.isEmpty(collection)) return;
            for (var i = 0; i < collection.length; i++) {
                fn(collection[i], i);
            }
        },
        find: function find(collection, fn) {
            if (this.isEmpty(collection)) return;
            var result;
            for (var i = 0; i < collection.length; i++) {
                if (fn(collection[i], i)) {
                    result = collection[i];
                    break;
                }
            }
            return result;
        },
        isBool: function isBool(variable) {
            return typeof(variable) === 'boolean';
        },
        isEmpty: function (collection) {
            return (collection && collection.length === 0) || typeof collection === 'undefined';
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
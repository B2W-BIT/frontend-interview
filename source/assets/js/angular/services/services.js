import angular from 'angular';
import Twitter from './twitter/twitter';

let componentModule = angular.module('app.services', [
  Twitter
])
.name;

export default componentModule;

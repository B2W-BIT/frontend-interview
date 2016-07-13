import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileNumbersComponent from './profileNumbers.component';

let profileNumbersModule = angular.module('profileNumbers', [
  uiRouter
])

.component('profileNumbers', profileNumbersComponent)
.name;

export default profileNumbersModule;

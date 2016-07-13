import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainMenuComponent from './mainMenu.component';

let mainMenuModule = angular.module('mainMenu', [
  uiRouter
])

.component('mainMenu', mainMenuComponent)
.name;

export default mainMenuModule;

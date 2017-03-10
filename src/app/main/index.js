import angular from 'angular';

import {main} from './main';
import {sidebar} from './sidebar/sidebar';

export const mainModule = 'main';

angular
  .module(mainModule, [])
  .component('app', main)
  .component('appSidebar', sidebar);

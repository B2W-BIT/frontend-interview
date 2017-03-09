import angular from 'angular';

import {main} from './main';
import {navbar} from './navbar/navbar';
import {sidebar} from './sidebar/sidebar';

export const mainModule = 'main';

angular
  .module(mainModule, [])
  .component('app', main)
  .component('profileNavbar', navbar)
  .component('appSidebar', sidebar);

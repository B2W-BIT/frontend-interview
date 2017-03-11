import angular from 'angular';

import {main} from './main';
import {sidebar} from './sidebar/sidebar';

import {twitterModule} from '../twitter/twitter';

export const mainModule = 'main';

angular
  .module(mainModule, [twitterModule])
  .component('app', main)
  .component('appSidebar', sidebar);

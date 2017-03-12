import angular from 'angular';

import {main} from './main';
import {sidebar} from './sidebar/sidebar';
import {content} from './content/content';
import {timeline} from './content/timeline/timeline';
import {tweet} from './content/tweet/tweet';

import {twitterModule} from '../twitter/twitter';

export const mainModule = 'main';

angular
  .module(mainModule, [twitterModule])
  .component('app', main)
  .component('appSidebar', sidebar)
  .component('appContent', content)
  .component('timeline', timeline)
  .component('tweet', tweet);

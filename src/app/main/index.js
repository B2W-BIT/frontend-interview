import angular from 'angular';

import {main} from './main';
import {sidebar} from './sidebar/sidebar';
import {followers} from './sidebar/followers/followers';
import {content} from './content/content';
import {timeline} from './content/timeline/timeline';
import {tweet} from './content/tweet/tweet';
import {trends} from './content/trends/trends';

import {twitterModule} from '../twitter/twitter';
import {flickrModule} from '../flickr/flickr';

export const mainModule = 'main';

angular
  .module(mainModule, [twitterModule, flickrModule])
  .component('app', main)
  .component('appSidebar', sidebar)
  .component('followers', followers)
  .component('appContent', content)
  .component('timeline', timeline)
  .component('tweet', tweet)
  .component('trends', trends);


import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

//Controllers (Pages)
import { MainController } from './pages/main/main.controller';

//Providers
import { StringService } from '../app/providers/string-service/string.service';
import { TwitterService } from '../app/providers/twitter-service/twitter.service';


//Components
import { TopNavbarDirective } from '../app/components/top-navbar-component/top-navbar.directive';
import { ProfileNavbarDirective } from '../app/components/profile-navbar-component/profile-navbar.directive';
import { FooterDirective } from '../app/components/footer-component/footer.directive';
import { ProfileHeaderDirective } from '../app/components/profile-header-component/profile-header.directive';
import { ProfileAvatarDirective } from '../app/components/profile-avatar-component/profile-avatar.directive';
import { ProfileSidebarDirective } from '../app/components/profile-sidebar-component/profile-sidebar.directive';
import { TimelineDirective } from '../app/components/timeline-component/timeline.directive';
import { TweetDirective } from '../app/components/tweet-component/tweet.directive';
import { ProfileCardDirective } from '../app/components/profile-card-component/profile-card.directive';




angular.module('frontendInterview', [
  'ngAnimate', 
  'ngResource',
  'ui.router',
  'ui.bootstrap'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('stringService', StringService)
  .service('twitterService', TwitterService)
  .controller('MainController', MainController)
  .directive('profileNavbarComponent', ProfileNavbarDirective)
  .directive('topNavbarComponent', TopNavbarDirective)
  .directive('footerComponent', FooterDirective)
  .directive('profileHeaderComponent', ProfileHeaderDirective)
  .directive('profileAvatarComponent', ProfileAvatarDirective)
  .directive('profileSidebarComponent', ProfileSidebarDirective)
  .directive('timelineComponent', TimelineDirective)
  .directive('tweetComponent', TweetDirective)
  .directive('profileCardComponent', ProfileCardDirective);

/******/!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}// webpackBootstrap
/******/
var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=n(1),i=n(2),o=n(3),a=n(4),s=n(5),l=n(6),c=n(7),u=n(8),p=n(9),v=n(10),f=n(11),d=n(12),g=n(13),m=n(14),h=n(15),b=n(16);angular.module("frontendInterview",["ngAnimate","ngResource","ui.router","ui.bootstrap"]).config(r.config).config(i.routerConfig).run(o.runBlock).service("stringService",s.StringService).service("twitterService",l.TwitterService).controller("MainController",a.MainController).directive("profileNavbarComponent",u.ProfileNavbarDirective).directive("topNavbarComponent",c.TopNavbarDirective).directive("footerComponent",p.FooterDirective).directive("profileHeaderComponent",v.ProfileHeaderDirective).directive("profileAvatarComponent",f.ProfileAvatarDirective).directive("profileSidebarComponent",d.ProfileSidebarDirective).directive("timelineComponent",g.TimelineDirective).directive("tweetComponent",m.TweetDirective).directive("profileCardComponent",h.ProfileCardDirective).directive("suggestionComponent",b.SuggestionDirective)},function(e,t){"use strict";function n(e){"ngInject";e.debugEnabled(!0)}n.$inject=["$logProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.config=n},function(e,t){"use strict";function n(e,t){"ngInject";e.state("home",{url:"/",templateUrl:"app/pages/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}n.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.routerConfig=n},function(e,t){"use strict";function n(e){"ngInject";e.debug("runBlock end")}n.$inject=["$log"],Object.defineProperty(t,"__esModule",{value:!0}),t.runBlock=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.MainController=function(){function e(t,r,i){"ngInject";n(this,e),this.$log=t,this.$scope=r,this.twitterService=i,this.profileUrl="",this.bannerUrl="",this.userData={},this.getAccount()}return e.$inject=["$log","$scope","twitterService"],r(e,[{key:"getAccount",value:function(){var e=this;this.twitterService.getAccount().then(function(t){var n=t.data.shift();e.profileUrl=n.profile_image_url,e.bannerUrl=n.profile_banner_url,e.userData=n,e.$scope.$broadcast("dispatch",{userData:e.userData,profileUrl:e.profileUrl,bannerUrl:e.bannerUrl})},function(){})}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.StringService=function(){function e(t){"ngInject";n(this,e),this.$http=t,this.resource="assets/constants/strings.json"}return e.$inject=["$http"],r(e,[{key:"getResource",value:function(){var e={url:this.resource,method:"GET"};return this.$http(e)}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.TwitterService=function(){function e(t,r,i,o){"ngInject";n(this,e),this.$log=t,this.$http=r,this.$resource=i,this.stringService=o,this.API_BASE="",this.TOKE="",this.AUTHORIZATION_TOKEN="",this.LIMIT="",this.getResource()}return e.$inject=["$log","$http","$resource","stringService"],r(e,[{key:"getResource",value:function(){var e=this;this.stringService.getResource().then(function(t){e.API_BASE=t.data.API_BASE,e.TOKEN=t.data.API_TOKEN,e.AUTHORIZATION_TOKE=t.data.API_TOKEN_AUTHORIZATION},function(){})}},{key:"getTweets",value:function(e){var t={url:"/tweets",method:"GET",params:{last_tweet_id:e}};return this.$http(t)}},{key:"getTweetsWithReplies",value:function(e){var t={url:"/tweets",method:"GET",params:{last_tweet_id:e,exclude_replies:!1}};return this.$http(t)}},{key:"getAccount",value:function(){var e={url:"/lookup",method:"GET"};return this.$http(e)}},{key:"getSuggestions",value:function(){var e={url:"/suggestions",method:"GET"};return this.$http(e)}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){"ngInject";var e={restrict:"E",templateUrl:"app/components/top-navbar-component/top-navbar.html",scope:{creationDate:"="},controller:i,controllerAs:"vm",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0}),t.TopNavbarDirective=r;var i=function o(){"ngInject";n(this,o)}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){"ngInject";var e={restrict:"E",templateUrl:"app/components/profile-navbar-component/profile-navbar.html",scope:{creationDate:"="},controller:i,controllerAs:"profileNav",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileNavbarDirective=r;var i=function o(){"ngInject";n(this,o)}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){"ngInject";var e={restrict:"E",templateUrl:"app/components/footer-component/footer.html",controller:o,controllerAs:"footerCtrl",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.FooterDirective=r;var o=function(){function e(t,r,i,o){"ngInject";n(this,e),this.$log=t,this.$state=r,this.$scope=i,this.stringService=o}return e.$inject=["$log","$state","$scope","stringService"],i(e,[{key:"errorHandler",value:function(e){this.$log.error("XHR Failed for getUsers.\n"+angular.toJson(e.data,!0)),this.$scope.$emit("error",{error:e.data})}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){"ngInject";var e={restrict:"E",templateUrl:"app/components/profile-header-component/profile-header.html",scope:{creationDate:"="},controller:o,controllerAs:"profileBannerCtrl",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.ProfileHeaderDirective=r;var o=function(){function e(t){"ngInject";var r=this;n(this,e),this.$scope=t,this.bannerUrl="",this.$scope.$on("dispatch",function(e,t){r.setBannerUrl(t.bannerUrl)})}return e.$inject=["$scope"],i(e,[{key:"setBannerUrl",value:function(e){this.bannerUrl=e.replace("_normal","")}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){"ngInject";var e={restrict:"E",templateUrl:"app/components/profile-avatar-component/profile-avatar.html",scope:{creationDate:"="},controller:o,controllerAs:"profileAvatarCtrl",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.ProfileAvatarDirective=r;var o=function(){function e(t){"ngInject";var r=this;n(this,e),this.$scope=t,this.avatarUrl="",this.$scope.$on("dispatch",function(e,t){r.setProfileUrl(t.profileUrl)})}return e.$inject=["$scope"],i(e,[{key:"setProfileUrl",value:function(e){this.avatarUrl=e.replace("_normal","")}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){"ngInject";var e={restrict:"E",templateUrl:"app/components/profile-sidebar-component/profile-sidebar.html",scope:{creationDate:"="},controller:i,controllerAs:"sidebar",bindToController:!0,transclude:!0};return e}Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileSidebarDirective=r;var i=function o(){"ngInject";n(this,o)}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){"ngInject";var e={restrict:"E",templateUrl:"app/components/timeline-component/timeline.html",controller:a,controllerAs:"timelineCtrl",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.TimelineDirective=r;var o=void 0,a=function(){function e(t){"ngInject";n(this,e),o=this,this.tweets=[],this.lastId="",this.replies=!1,this.twitterService=t,this.getTweets(),angular.element(window).scroll(function(){var e=angular.element(window).scrollTop()+angular.element(window).height();e===angular.element(document).height()&&(o.replies?o.getTweetsWithReplies():o.getTweets())})}return e.$inject=["twitterService"],i(e,[{key:"getTweets",value:function(){var e=this;this.twitterService.getTweets(o.lastId).then(function(t){angular.forEach(t.data,function(e){o.lastId!==e.id_str&&o.tweets.push(e)}),e.lastId=o.tweets[o.tweets.length-1].id_str},function(t){e.$log.info(t)})}},{key:"getTweetsWithReplies",value:function(){var e=this;this.twitterService.getTweetsWithReplies(o.lastId).then(function(t){angular.forEach(t.data,function(e){o.lastId!==e.id_str&&o.tweets.push(e)}),e.lastId=o.tweets[o.tweets.length-1].id_str},function(t){e.$log.info(t)})}},{key:"setTweets",value:function(e){this.tweets=e}},{key:"changeTweetsViewed",value:function(e){o.lastId="",o.tweets=[],e?(this.replies=!0,o.getTweetsWithReplies()):(this.replies=!1,o.getTweets())}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){"ngInject";var e={restrict:"E",templateUrl:"app/components/tweet-component/tweet.html",bindings:{tweet:"="},controller:i,controllerAs:"tweetCtrl",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0}),t.TweetDirective=r;var i=function o(e,t){"ngInject";n(this,o),this.$log=e,this.tweet=t.tweet};i.$inject=["$log","$scope"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){"ngInject";var e={restrict:"E",templateUrl:"app/components/profile-card-component/profile-card.html",controller:o,controllerAs:"profileCardCtrl",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.ProfileCardDirective=r;var o=function(){function e(t,r){"ngInject";var i=this;n(this,e),this.$log=t,this.userData={},this.$scope=r,this.$scope.$on("dispatch",function(e,t){i.setUserData(t.userData)})}return e.$inject=["$log","$scope"],i(e,[{key:"setUserData",value:function(e){console.log(e),this.userData=e}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){"ngInject";var e={restrict:"E",templateUrl:"app/components/suggestion-component/suggestion.html",controller:a,controllerAs:"suggestionCtrl",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.SuggestionDirective=r;var o=void 0,a=function(){function e(t){"ngInject";n(this,e),o=this,this.twitterService=t,this.suggestions=[],this.getSuggestions()}return e.$inject=["twitterService"],i(e,[{key:"getSuggestions",value:function(){var e=[];this.twitterService.getSuggestions().then(function(t){angular.forEach(t.data,function(t){return e.push(t)}),e.length&&(o.suggestions=e.slice(0,4))},function(){})}}]),e}()}]),angular.module("frontendInterview").run(["$templateCache",function(e){e.put("app/components/footer-component/footer.html","<hr><!-- Footer --><footer><div class=row><div class=col-lg-12><p>Copyright &copy; Mongeral Aegon 2016</p></div></div></footer>"),e.put("app/components/profile-avatar-component/profile-avatar.html",'<div class=container><div class=row><div class="avatar col-xs-6 col-md-2"><a href=# class=thumbnail><img src={{profileAvatarCtrl.avatarUrl}} alt=...></a></div></div></div>'),e.put("app/components/profile-card-component/profile-card.html",'<div class=row><div class="col-xs-12 col-md-12"><h2>{{profileCardCtrl.userData.name}}</h2><div>@{{profileCardCtrl.userData.screen_name}}</div><div>{{profileCardCtrl.userData.description}}</div><div><img style="height: 20px" src=assets/images/glyphicons/glyphicons-243-map-marker.png> {{profileCardCtrl.userData.location}}</div></div></div>'),e.put("app/components/profile-header-component/profile-header.html",'<div class=profile-header><div class=container><div class=row><div class="col-md-12 col-xs-12"><div class=banner><img class=text-center style="width: 100%" src={{profileBannerCtrl.bannerUrl}}></div></div><div class=clear></div><profile-avatar-component></profile-avatar-component></div></div></div>'),e.put("app/components/profile-navbar-component/profile-navbar.html",'<!-- Static navbar --><nav class="navbar navbar-default custom-navbar-height"><div class=container><div id=navbar class="collapse navbar-collapse"><ul class="nav navbar-nav"><li class=items-padding><a ui-sref-active=active ui-sref=home>Home</a></li><!--<li class="items-padding">\n            <a ui-sref-active="active" ui-sref="developers"> Developers </a>\n          </li>--></ul></div><!--/.navbar-collapse --></div><!--/.container-fluid --></nav>'),e.put("app/components/profile-sidebar-component/profile-sidebar.html","<div><ng-transclude></ng-transclude></div>"),e.put("app/components/suggestion-component/suggestion.html",'<div class="hide-panel panel panel-default"><div class="panel-body padding"><div class=row><div class=col-md-12>Quem seguir</div></div><div class=row ng-repeat="suggest in suggestionCtrl.suggestions"><div class=col-md-3><div class="tweet-avatar thumbnail"><img src={{suggest.profile_image_url}}></div></div><div class=col-md-9>{{suggest.screen_name}}</div><hr></div></div></div>'),e.put("app/components/timeline-component/timeline.html",'<div class="panel panel-default"><div class="panel-heading heading-content"><div class=row><div class=col-md-2><a href="" ng-class="{selected: !timelineCtrl.replies}" ng-click=timelineCtrl.changeTweetsViewed(false)>Tweets</a></div><div class=col-md-4><a href="" ng-class="{selected: timelineCtrl.replies}" ng-click=timelineCtrl.changeTweetsViewed(true)>Tweets e respostas</a></div></div></div><span ng-repeat="tweet in timelineCtrl.tweets track by $index" ng-if=!timelineCtrl.replies><tweet-component tweet=tweet></tweet-component></span><span ng-repeat="tweet in timelineCtrl.tweets track by $index" ng-if=timelineCtrl.replies><tweet-component tweet=tweet></tweet-component></span></div>'),e.put("app/components/top-navbar-component/top-navbar.html",'<!-- Static navbar --><nav class="navbar navbar-default navbar-fixed-top custom-navbar-height"><div class=container><div class=navbar-header><!--<a class="navbar-brand" href="https://www.mongeralaegon.com.br/">\n        <img src="assets/images/mongeral-logo.png" class="height-brand" alt="Mongeral Aegon Web Site">\n      </a>--></div><div id=navbar class="collapse navbar-collapse"><ul class="nav navbar-nav"><li class=items-padding><a ui-sref-active=active ui-sref=home><img class=glyphicons src=assets/images/glyphicons/glyphicons-21-home.png> Home</a></li><!--<li class="items-padding">\n            <a ui-sref-active="active" ui-sref="developers"> Developers </a>\n          </li>--></ul></div><!--/.navbar-collapse --></div><!--/.container-fluid --></nav>'),e.put("app/components/tweet-component/tweet.html",'<div class="panel-body padding"><div class=row><div class="col-xs-3 col-md-2"><div class="tweet-avatar thumbnail"><img src={{tweetCtrl.tweet.user.profile_image_url}}></div></div><div class="col-xs-9 col-md-9"><div><strong>{{tweetCtrl.tweet.user.name}}</strong> @{{tweetCtrl.tweet.user.screen_name}}</div>{{tweetCtrl.tweet.text}}<div class=text-center ng-if=tweetCtrl.tweet.entities.media.length><img class=tweet-img src={{tweetCtrl.tweet.entities.media[0].media_url}}></div><div class="row m-t"><div class="col-xs-2 col-md-3"><img style="height: 15px" src=assets/images/glyphicons/glyphicons-222-unshare.png></div><div class="col-xs-2 col-md-3"><img style="height: 15px" src=assets/images/glyphicons/glyphicons-81-retweet.png></div><div class="col-xs-2 col-md-3"><img style="height: 15px" src=assets/images/glyphicons/glyphicons-13-heart.png></div></div></div></div></div><hr>'),e.put("app/pages/main/main.html",'<div class=main><top-navbar-component></top-navbar-component><profile-header-component></profile-header-component><profile-navbar-component></profile-navbar-component><div class="custom-margin container"><div class=row><div class="col-md-3 col-xs-12"><profile-sidebar-component><profile-card-component></profile-card-component></profile-sidebar-component></div><div class="col-md-6 col-xs-12"><timeline-component></timeline-component></div><div class="col-md-3 col-xs-12"><profile-sidebar-component><suggestion-component></suggestion-component></profile-sidebar-component></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-513c7214a5.js.map

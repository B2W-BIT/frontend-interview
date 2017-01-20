"use strict";

let topNavbarCtrl;

export function TopNavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/top-navbar-component/top-navbar.html',
    scope: {
        creationDate: '='
    },
    controller: TopNavbarController,
    controllerAs: 'topNavbarCtrl',
    bindToController: true
  };

  return directive;
}

class TopNavbarController {
  constructor (constants) {
    'ngInject';

    //Strings
    this.HOME = constants.TOP_NAVBAR_COMPONENT.HOME;
    this.MESSAGES = constants.TOP_NAVBAR_COMPONENT.MESSAGES;
    this.MOMENTS = constants.TOP_NAVBAR_COMPONENT.MOMENTS;
    this.NOTIFICATIONS = constants.TOP_NAVBAR_COMPONENT.NOTIFICATIONS;
    this.TWEET = constants.TOP_NAVBAR_COMPONENT.TWEET;
    this.SEARCH_ON_TWITTER = constants.TOP_NAVBAR_COMPONENT.SEARCH_ON_TWITTER;

  }


}

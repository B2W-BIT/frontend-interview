"use strict";

export function TopNavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/top-navbar-component/top-navbar.html',
    scope: {
        creationDate: '='
    },
    controller: TopNavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class TopNavbarController {
  constructor () {
    'ngInject';

  }
}

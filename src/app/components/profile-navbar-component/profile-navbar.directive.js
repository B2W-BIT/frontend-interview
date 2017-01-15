"use strict";

export function ProfileNavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/profile-navbar-component/profile-navbar.html',
    scope: {
        creationDate: '='
    },
    controller: ProfileNavbarController,
    controllerAs: 'profileNav',
    bindToController: true
  };

  return directive;
}

class ProfileNavbarController {
  constructor () {
    'ngInject';

  }
}

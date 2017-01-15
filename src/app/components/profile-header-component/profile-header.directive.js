"use strict";

export function ProfileHeaderDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/profile-header-component/profile-header.html',
    scope: {
        creationDate: '='
    },
    controller: ProfileHeaderController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class ProfileHeaderController {
  constructor () {
    'ngInject';

  }
}

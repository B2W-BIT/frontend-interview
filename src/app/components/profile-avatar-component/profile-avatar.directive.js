"use strict";

export function ProfileAvatarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/profile-avatar-component/profile-avatar.html',
    scope: {
        creationDate: '='
    },
    controller: ProfileAvatarController,
    controllerAs: 'profileAvatarCtrl',
    bindToController: true
  };

  return directive;
}

class ProfileAvatarController {
  constructor () {
    'ngInject';

  }
}

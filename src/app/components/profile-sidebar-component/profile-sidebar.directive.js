
"use strict";

export function ProfileSidebarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/profile-sidebar-component/profile-sidebar.html',
    scope: {
        creationDate: '='
    },
    controller: ProfileSidebarController,
    controllerAs: 'sidebar',
    bindToController: true,
    transclude: true
  };

  return directive;
}

class ProfileSidebarController {
  constructor () {
    'ngInject';

  }
}

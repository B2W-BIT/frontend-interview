"use strict";

export function ProfileCardDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/profile-card-component/profile-card.html',
    scope: {
        creationDate: '='
    },
    controller: ProfileCardController,
    controllerAs: 'profileCardCtrl',
    bindToController: true
  };

  return directive;
}

class ProfileCardController {
  constructor () {
    'ngInject';

  }
}

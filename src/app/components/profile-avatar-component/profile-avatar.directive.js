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
  constructor ($scope) {
    'ngInject';

    this.$scope = $scope;
    this.avatarUrl = '';

    this.$scope.$on('dispatch', (event, args) => {
      this.setProfileUrl(args.profileUrl);
    })

  }

  setProfileUrl(url){
    this.avatarUrl = url.replace("_normal", "");
  }
}

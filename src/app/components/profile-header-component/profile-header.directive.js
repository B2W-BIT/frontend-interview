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
    controllerAs: 'profileBannerCtrl',
    bindToController: true
  };

  return directive;
}

class ProfileHeaderController {
  constructor ($scope) {
    'ngInject';

    this.$scope = $scope;
    this.bannerUrl = '';

    this.$scope.$on('dispatch', (event, args) => {
      this.setBannerUrl(args.bannerUrl);
    })

  }

  setBannerUrl(url){
    this.bannerUrl = url.replace("_normal", "");
  }
}

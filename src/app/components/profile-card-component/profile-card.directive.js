"use strict";

let profileCardCtrl;

export function ProfileCardDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/profile-card-component/profile-card.html',
    controller: ProfileCardController,
    controllerAs: 'profileCardCtrl',
    bindToController: true
  };

  return directive;
}

class ProfileCardController {
  constructor ($log, $scope, constants) {
    'ngInject';
    
    profileCardCtrl = this;
    this.$log = $log;
    this.userData = {};
    this.$scope = $scope;

    //Strigs 
    this.SINCE_OF = constants.PROFILE_CARD_COMPONENT.SINCE_OF;
    this.TWEETER_TO = constants.PROFILE_CARD_COMPONENT.TWEETER_TO;
    this.FOLLOWERS = constants.PROFILE_CARD_COMPONENT.FOLLOWERS;
    this.FILTER = constants.PROFILE_CARD_COMPONENT.FILTER;
    this.SEE_ON_GITHUB = constants.PROFILE_CARD_COMPONENT.SEE_ON_GITHUB;

    this.$scope.$on('dispatch', (event, args) => {
      this.setUserData(args.userData);
    });

  }

  setUserData(data){
    this.userData = data;
  }

  

  
  

  
}

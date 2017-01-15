"use strict";

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
  constructor ($log, $scope) {
    'ngInject';
    
    this.$log = $log;
    this.userData = {};
    this.$scope = $scope;

    this.$scope.$on('dispatch', (event, args) => {
      this.setUserData(args.userData);
    });

  }

  setUserData(data){
    console.log(data);
    this.userData = data;
  }
  

  
}

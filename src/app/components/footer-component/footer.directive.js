"use strict";

export function FooterDirective() {
  "ngInject";

  let directive = {
    restrict: "E",
    templateUrl: "app/components/footer-component/footer.html",
    controller: FooterController,
    controllerAs: "footerCtrl",
    bindToController: true
  };

  return directive;
}

class FooterController {
  constructor ($log, $state, $scope, stringService) {
    "ngInject";

    //Angular dependencies
    this.$log = $log;
    this.$state = $state
    this.$scope = $scope;

    //Custom dependencies
    this.stringService = stringService;
  } 

  errorHandler(error){
    this.$log.error("XHR Failed for getUsers.\n" + angular.toJson(error.data, true));
    this.$scope.$emit("error", {"error": error.data});
  }

}

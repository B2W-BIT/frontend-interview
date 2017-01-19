"use strict";

let trendsCtrl;

export function TrendsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/trends-component/trends.html',
    controller: TrendsController,
    controllerAs: 'trendsCtrl',
    bindToController: true
  };

  return directive;
}

class TrendsController {
  constructor ($log, twitterService) {
    'ngInject';

    trendsCtrl = this;
    this.$log = $log;
    this.trends = [];
    this.twitterService = twitterService;

    this.getTrends();
  }

  getTrends(){
    let trends = [];  
    this.twitterService
      .getTrends().then(response => {
          console.log(response)
          angular.forEach(response.data[0].trends, item => {
              trends.push(item);
          });
          trendsCtrl.trends = trends.splice(0,5)
      }, () => {});
  }
}

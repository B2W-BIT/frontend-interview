"use strict";

export function TimelineDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/timeline-component/timeline.html',
    scope: {
        creationDate: '='
    },
    controller: TimelineController,
    controllerAs: 'timelineCtrl',
    bindToController: true
  };

  return directive;
}

class TimelineController {
  constructor () {
    'ngInject';

  }
}

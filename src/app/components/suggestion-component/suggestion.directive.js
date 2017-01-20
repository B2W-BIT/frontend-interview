"use strict";

let suggestionCtrl; 

export function SuggestionDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/suggestion-component/suggestion.html',
    controller: SuggestionController,
    controllerAs: 'suggestionCtrl',
    bindToController: true
  };

  return directive;
}

class SuggestionController {
  constructor (twitterService, constants) {
    'ngInject';
    
    suggestionCtrl = this;
    this.twitterService = twitterService;
    this.suggestions = [];

    //Strings
    this.WHO_IS_FOLLOW = constants.SUGESTION_COMPONENT.WHO_IS_FOLLOW;
    this.FOLLOW = constants.SUGESTION_COMPONENT.FOLLOW;

    this.getSuggestions();

  }


  getSuggestions(){
    let items = []
    this.twitterService
      .getSuggestions().then(response => {
        angular.forEach(response.data, item => items.push(item));
        if (items.length) suggestionCtrl.suggestions = items.slice(0,4);
      }, ()=>{});
  }
  

  
}

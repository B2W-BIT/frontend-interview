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
  constructor (twitterService) {
    'ngInject';
    
    suggestionCtrl = this;
    this.twitterService = twitterService;
    this.suggestions = [];

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

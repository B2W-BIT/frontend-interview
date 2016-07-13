class widgetSuggestionsController {
  constructor(twitterAPI) {
    this.name = 'widgetSuggestions';

    twitterAPI.getSuggestions()
      .success( (data) => {
        this.suggestions = data.users;
      });
  }
}

widgetSuggestionsController.$inject = ['twitterAPI'];

export default widgetSuggestionsController;

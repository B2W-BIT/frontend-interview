class TechsController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('app/techs/techs.json')
      .then(response => {
        this.techs = response.data;
      });
  }
}

export const techs = {
  template: require('./techs.html'),
  controller: TechsController
};

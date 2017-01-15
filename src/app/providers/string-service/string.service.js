export class StringService {
  constructor ($http) {
    'ngInject';

    
    this.$http = $http;
    this.resource = 'assets/constants/strings.json';
  }

  getResource() {
    
    let options = {
      url: this.resource,
      method: 'GET'
    }

    return this.$http(options)
  }

}

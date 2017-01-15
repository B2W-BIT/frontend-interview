export class TwitterService {
  constructor ($log, $http, stringService) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.stringService = stringService;
    this.API_BASE = '';
    this.TOKE = '';
    this.LIMIT = '';
    this.getResource();


    
  }

  getResource(){
    this.stringService.getResource().then((response)=>{
      this.API_BASE = response.data.API_BASE;
      this.TOKEN = response.data.API_TOKEN;
      this.LIMIT = response.data.LIMIT;
    }, ()=>{})
  }

  getDevelopers(username, limit=30) {
    let options = {
      url: this.API_BASE + '/users' + (angular.isUndefined(username) ? '' : '/' + username ),
      method: 'GET',
      params: {
        'per_page': limit
    },
    headers: {
        'Authorization': "Bearer " + this.TOKEN
      }
    }
    return this.$http(options);
  }

  searchDevelopers(username){
    let options = {
      url: this.API_BASE + '/search/users',
      method: 'GET',
      params: {
        'q': username,
        'per_page': this.LIMIT
    },
    headers: {
        'Authorization': "Bearer " + this.TOKEN
      }
    }
    return this.$http(options);
  }
}

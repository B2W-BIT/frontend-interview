export class MainController {
  constructor ($log, $scope, twitterService) {
    'ngInject';
    
    this.$log = $log;
    this.$scope = $scope;
    this.twitterService = twitterService;
    this.profileUrl = '';
    this.bannerUrl = '';
    this.userData = {};

    this.getAccount();

  }

  getAccount(){
    this.twitterService.getAccount()
      .then(response => {
        let data = response.data.shift();
        this.profileUrl = data.profile_image_url;
        this.bannerUrl = data.profile_banner_url
        this.userData = data;

        this.$scope.$broadcast('dispatch', {
          userData: this.userData,
          profileUrl: this.profileUrl,
          bannerUrl: this.bannerUrl
        });

      }, ()=>{});
  }

}

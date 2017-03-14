import './header.css';

class HeaderController {
  constructor(twitter) {
    twitter
      .getUser('americanascom')
      .then(response => {
        this.user = response.data;
        this.user.profile_image_url_400x400 =
          this.user.profile_image_url.replace('_normal', '_400x400');
      });
  }
}

export const header = {
  template: require('./header.html'),
  controller: HeaderController,
  controllerAs: 'headerCtrl'
};

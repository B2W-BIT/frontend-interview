import './followers.css';

class FollowersController {
  constructor(twitter) {
    this.followers = [1, 2, 3, 4, 5, 6, 7, 8];
    twitter
      .getUser('americanascom')
      .then(response => {
        this.user = response.data;
      });
  }
}

export const followers = {
  template: require('./followers.html'),
  controller: FollowersController,
  controllerAs: 'followersCtrl'
};

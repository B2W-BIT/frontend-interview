import './profile-navbar.css';

class ProfileNavbar {
  constructor(twitter) {
    twitter
      .getUser('americanascom')
      .then(response => {
        this.user = response.data;
      });
  }
}

export const profileNavbar = {
  template: require('./profile-navbar.html'),
  controller: ProfileNavbar,
  controllerAs: 'profileNavbarCtrl'
};

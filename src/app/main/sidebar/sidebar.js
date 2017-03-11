import './sidebar.css';

class SidebarController {
  constructor(twitter) {
    twitter
      .getUser('americanascom')
      .then(user => {
        this.user = user.data;
      });
  }
}

export const sidebar = {
  template: require('./sidebar.html'),
  controller: SidebarController,
  controllerAs: 'sidebarCtrl'
};

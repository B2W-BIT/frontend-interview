import './sidebar.css';

class SidebarController {
  constructor(twitter) {
    twitter
      .getUser('americanascom')
      .then(response => {
        this.user = response.data;
      });
  }
}

export const sidebar = {
  template: require('./sidebar.html'),
  controller: SidebarController,
  controllerAs: 'sidebarCtrl'
};

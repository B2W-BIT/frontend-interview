import './sidebar.css';

class SidebarController {
  constructor(twitter) {
    twitter
      .getUser('americanascom')
      .then(response => {
        this.user = response.data;
        this.user.createdAt = new Date(this.user.created_at);
      });
  }
}

export const sidebar = {
  template: require('./sidebar.html'),
  controller: SidebarController,
  controllerAs: 'sidebarCtrl'
};

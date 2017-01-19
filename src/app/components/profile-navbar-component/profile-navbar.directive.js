"use strict";

let profileNavCtrl;

export function ProfileNavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/profile-navbar-component/profile-navbar.html',
    controller: ProfileNavbarController,
    controllerAs: 'profileNavCtrl',
    bindToController: true
  };

  return directive;
}

class ProfileNavbarController {
  constructor ($scope) {
    'ngInject';
    profileNavCtrl = this;

    this.countTweets = null;
    this.favouritesCount = null;
    this.friendsCount = null;
    this.followersCount = null;
    this.$scope = $scope;

    this.$scope.$on('dispatch', (event, args) => {
      this.setCounts(args.userData);
    });
  }

  setCounts(userData){
    console.log(userData);
    this.setCountTweets(userData.statuses_count);
    this.setFavouritesCount(userData.favourites_count);
    this.setFriendsCount(userData.friends_count);
    this.setFollowerCount(userData.followers_count);
  }
  
  setCountTweets(count_tweets){
    this.countTweets = count_tweets;
  }

  setFavouritesCount(favourites_count){
    this.favouritesCount = favourites_count;
  }

  setFriendsCount(friends_count){
    this.friendsCount = friends_count;
  }

  setFollowerCount(followers_count){
    this.followersCount = followers_count
  }

}

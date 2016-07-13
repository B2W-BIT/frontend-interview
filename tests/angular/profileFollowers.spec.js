import profileFollowersModule from '../../source/assets/js/angular/common/profile-followers/profileFollowers'
import profileFollowersController from '../../source/assets/js/angular/common/profile-followers/profileFollowers.controller';
import profileFollowersComponent from '../../source/assets/js/angular/common/profile-followers/profileFollowers.component';
import profileFollowersTemplate from '../../source/assets/js/angular/common/profile-followers/profileFollowers.html';

describe('BDD - Angular - Common - profileFollowers', () => {
  let $rootScope, makeController;

  beforeEach(window.module(profileFollowersModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new profileFollowersController();
    };
  }));

  describe('Module', () => {

  });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => {
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {

  });

  describe('Component', () => {
    let component = profileFollowersComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(profileFollowersTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(profileFollowersController);
    });
  });
});

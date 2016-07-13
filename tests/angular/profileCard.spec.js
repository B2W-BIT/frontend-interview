import profileCardModule from '../../source/assets/js/angular/common/profile-card/profileCard'
import profileCardController from '../../source/assets/js/angular/common/profile-card/profileCard.controller';
import profileCardComponent from '../../source/assets/js/angular/common/profile-card/profileCard.component';
import profileCardTemplate from '../../source/assets/js/angular/common/profile-card/profileCard.html';

describe('BDD - Angular - Common - profileCard', () => {
  let $rootScope, makeController;

  beforeEach(window.module(profileCardModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new profileCardController();
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
    let component = profileCardComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(profileCardTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(profileCardController);
    });
  });
});

import profileNumbersModule from '../../source/assets/js/angular/common/profile-numbers/profileNumbers'
import profileNumbersController from '../../source/assets/js/angular/common/profile-numbers/profileNumbers.controller';
import profileNumbersComponent from '../../source/assets/js/angular/common/profile-numbers/profileNumbers.component';
import profileNumbersTemplate from '../../source/assets/js/angular/common/profile-numbers/profileNumbers.html';

describe('BDD - Angular - Common - profileNumbers', () => {
  let $rootScope, makeController;

  beforeEach(window.module(profileNumbersModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new profileNumbersController();
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
    let component = profileNumbersComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(profileNumbersTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(profileNumbersController);
    });
  });
});

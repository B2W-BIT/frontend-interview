import MainMenuModule from '../../source/assets/js/angular/common/main-menu/mainMenu'
import MainMenuController from '../../source/assets/js/angular/common/main-menu/mainMenu.controller';
import MainMenuComponent from '../../source/assets/js/angular/common/main-menu/mainMenu.component';
import MainMenuTemplate from '../../source/assets/js/angular/common/main-menu/mainMenu.html';

describe('BDD - Angular - Common - MainMenu', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MainMenuModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MainMenuController();
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
    let component = MainMenuComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(MainMenuTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MainMenuController);
    });
  });
});

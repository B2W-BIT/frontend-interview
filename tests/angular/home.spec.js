import HomeModule from '../../source/assets/js/angular/components/home/home'
import HomeController from '../../source/assets/js/angular/components/home/home.controller';
import HomeComponent from '../../source/assets/js/angular/components/home/home.component';
import HomeTemplate from '../../source/assets/js/angular/components/home/home.html';

describe('BDD - Angular - Components - Home', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HomeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HomeController();
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
    let component = HomeComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(HomeTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(HomeController);
    });
  });
});

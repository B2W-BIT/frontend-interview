import profilePhotosVideosModule from '../../source/assets/js/angular/common/profile-photos-videos/profilePhotosVideos'
import profilePhotosVideosController from '../../source/assets/js/angular/common/profile-photos-videos/profilePhotosVideos.controller';
import profilePhotosVideosComponent from '../../source/assets/js/angular/common/profile-photos-videos/profilePhotosVideos.component';
import profilePhotosVideosTemplate from '../../source/assets/js/angular/common/profile-photos-videos/profilePhotosVideos.html';

describe('BDD - Angular - Common - profilePhotosVideos', () => {
  let $rootScope, makeController;

  beforeEach(window.module(profilePhotosVideosModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new profilePhotosVideosController();
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
    let component = profilePhotosVideosComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(profilePhotosVideosTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(profilePhotosVideosController);
    });
  });
});

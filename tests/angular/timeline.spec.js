import TimelineModule from '../../source/assets/js/angular/common/timeline/timeline'
import TimelineController from '../../source/assets/js/angular/common/timeline/timeline.controller';
import TimelineComponent from '../../source/assets/js/angular/common/timeline/timeline.component';
import TimelineTemplate from '../../source/assets/js/angular/common/timeline/timeline.html';

describe('BDD - Angular - Common - Timeline', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TimelineModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TimelineController();
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
    let component = TimelineComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(TimelineTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(TimelineController);
    });
  });
});


describe('directive navbar', function() {
  let vm;
  let element;


  beforeEach(angular.mock.module('frontEndTrabalheNaMad'));

  beforeEach(inject(($compile, $rootScope) => {
    element = angular.element(`
      <navbar-component></navbar-component>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  it('should have isolate scope object with instanciate members', () => {
    expect(vm).toEqual(jasmine.any(Object));

    /*expect(vm.creationDate).toEqual(jasmine.any(Number));
    expect(vm.creationDate).toEqual(timeInMs);

    expect(vm.relativeDate).toEqual(jasmine.any(String));
    expect(vm.relativeDate).toEqual('a day ago');*/
  });
});

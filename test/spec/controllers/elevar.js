'use strict';

describe('Controller: ElevarCtrl', function () {

  // load the controller's module
  beforeEach(module('proyectodisenoApp'));

  var ElevarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ElevarCtrl = $controller('ElevarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

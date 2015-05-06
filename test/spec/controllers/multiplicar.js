'use strict';

describe('Controller: MultiplicarCtrl', function () {

  // load the controller's module
  beforeEach(module('proyectodisenoApp'));

  var MultiplicarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MultiplicarCtrl = $controller('MultiplicarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

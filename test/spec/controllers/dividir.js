'use strict';

describe('Controller: DividirCtrl', function () {

  // load the controller's module
  beforeEach(module('proyectodisenoApp'));

  var DividirCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DividirCtrl = $controller('DividirCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

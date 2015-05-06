'use strict';

describe('Controller: RaizCtrl', function () {

  // load the controller's module
  beforeEach(module('proyectodisenoApp'));

  var RaizCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RaizCtrl = $controller('RaizCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

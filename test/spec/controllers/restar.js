'use strict';

describe('Controller: RestarCtrl', function () {

  // load the controller's module
  beforeEach(module('proyectodisenoApp'));

  var RestarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestarCtrl = $controller('RestarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

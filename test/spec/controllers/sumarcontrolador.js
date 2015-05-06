'use strict';

describe('Controller: SumarcontroladorCtrl', function () {

  // load the controller's module
  beforeEach(module('proyectodisenoApp'));

  var SumarcontroladorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SumarcontroladorCtrl = $controller('SumarcontroladorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

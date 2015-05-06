'use strict';

describe('Controller: SumarCtrl', function () {

  // load the controller's module
  beforeEach(module('proyectodisenoApp'));

  var SumarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SumarCtrl = $controller('SumarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

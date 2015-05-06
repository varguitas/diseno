'use strict';

describe('Controller: DecimalhexadecimalCtrl', function () {

  // load the controller's module
  beforeEach(module('proyectodisenoApp'));

  var DecimalhexadecimalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DecimalhexadecimalCtrl = $controller('DecimalhexadecimalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

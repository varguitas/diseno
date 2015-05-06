'use strict';

describe('Controller: DecimalbinarioCtrl', function () {

  // load the controller's module
  beforeEach(module('proyectodisenoApp'));

  var DecimalbinarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DecimalbinarioCtrl = $controller('DecimalbinarioCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

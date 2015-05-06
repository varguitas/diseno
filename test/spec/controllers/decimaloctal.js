'use strict';

describe('Controller: DecimaloctalCtrl', function () {

  // load the controller's module
  beforeEach(module('proyectodisenoApp'));

  var DecimaloctalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DecimaloctalCtrl = $controller('DecimaloctalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Service: RestarControlador', function () {

  // load the service's module
  beforeEach(module('proyectodisenoApp'));

  // instantiate service
  var RestarControlador;
  beforeEach(inject(function (_RestarControlador_) {
    RestarControlador = _RestarControlador_;
  }));

  it('should do something', function () {
    expect(!!RestarControlador).toBe(true);
  });

});

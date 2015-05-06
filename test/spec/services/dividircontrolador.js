'use strict';

describe('Service: DividirControlador', function () {

  // load the service's module
  beforeEach(module('proyectodisenoApp'));

  // instantiate service
  var DividirControlador;
  beforeEach(inject(function (_DividirControlador_) {
    DividirControlador = _DividirControlador_;
  }));

  it('should do something', function () {
    expect(!!DividirControlador).toBe(true);
  });

});

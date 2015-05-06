'use strict';

describe('Service: RaizControlador', function () {

  // load the service's module
  beforeEach(module('proyectodisenoApp'));

  // instantiate service
  var RaizControlador;
  beforeEach(inject(function (_RaizControlador_) {
    RaizControlador = _RaizControlador_;
  }));

  it('should do something', function () {
    expect(!!RaizControlador).toBe(true);
  });

});

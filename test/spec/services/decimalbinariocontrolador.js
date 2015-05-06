'use strict';

describe('Service: DecimalBinarioControlador', function () {

  // load the service's module
  beforeEach(module('proyectodisenoApp'));

  // instantiate service
  var DecimalBinarioControlador;
  beforeEach(inject(function (_DecimalBinarioControlador_) {
    DecimalBinarioControlador = _DecimalBinarioControlador_;
  }));

  it('should do something', function () {
    expect(!!DecimalBinarioControlador).toBe(true);
  });

});

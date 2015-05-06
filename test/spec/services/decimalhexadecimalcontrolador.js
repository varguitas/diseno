'use strict';

describe('Service: DecimalHexadecimalControlador', function () {

  // load the service's module
  beforeEach(module('proyectodisenoApp'));

  // instantiate service
  var DecimalHexadecimalControlador;
  beforeEach(inject(function (_DecimalHexadecimalControlador_) {
    DecimalHexadecimalControlador = _DecimalHexadecimalControlador_;
  }));

  it('should do something', function () {
    expect(!!DecimalHexadecimalControlador).toBe(true);
  });

});

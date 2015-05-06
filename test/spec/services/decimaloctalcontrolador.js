'use strict';

describe('Service: DecimalOctalControlador', function () {

  // load the service's module
  beforeEach(module('proyectodisenoApp'));

  // instantiate service
  var DecimalOctalControlador;
  beforeEach(inject(function (_DecimalOctalControlador_) {
    DecimalOctalControlador = _DecimalOctalControlador_;
  }));

  it('should do something', function () {
    expect(!!DecimalOctalControlador).toBe(true);
  });

});

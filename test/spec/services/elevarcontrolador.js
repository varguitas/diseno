'use strict';

describe('Service: ElevarControlador', function () {

  // load the service's module
  beforeEach(module('proyectodisenoApp'));

  // instantiate service
  var ElevarControlador;
  beforeEach(inject(function (_ElevarControlador_) {
    ElevarControlador = _ElevarControlador_;
  }));

  it('should do something', function () {
    expect(!!ElevarControlador).toBe(true);
  });

});

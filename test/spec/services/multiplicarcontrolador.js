'use strict';

describe('Service: MultiplicarControlador', function () {

  // load the service's module
  beforeEach(module('proyectodisenoApp'));

  // instantiate service
  var MultiplicarControlador;
  beforeEach(inject(function (_MultiplicarControlador_) {
    MultiplicarControlador = _MultiplicarControlador_;
  }));

  it('should do something', function () {
    expect(!!MultiplicarControlador).toBe(true);
  });

});

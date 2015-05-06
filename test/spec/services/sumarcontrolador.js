'use strict';

describe('Service: SumarControlador', function () {

  // load the service's module
  beforeEach(module('proyectodisenoApp'));

  // instantiate service
  var SumarControlador;
  beforeEach(inject(function (_SumarControlador_) {
    SumarControlador = _SumarControlador_;
  }));

  it('should do something', function () {
    expect(!!SumarControlador).toBe(true);
  });

});

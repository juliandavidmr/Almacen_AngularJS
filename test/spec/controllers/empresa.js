'use strict';

describe('Controller: EmpresaCtrl', function () {

  // load the controller's module
  beforeEach(module('frutasApp'));

  var EmpresaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmpresaCtrl = $controller('EmpresaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmpresaCtrl.awesomeThings.length).toBe(3);
  });
});

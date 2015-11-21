'use strict';

describe('Controller: SucursalCtrl', function () {

  // load the controller's module
  beforeEach(module('frutasApp'));

  var SucursalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SucursalCtrl = $controller('SucursalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SucursalCtrl.awesomeThings.length).toBe(3);
  });
});

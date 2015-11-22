'use strict';

describe('Controller: EmpleadoCtrl', function () {

  // load the controller's module
  beforeEach(module('frutasApp'));

  var EmpleadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmpleadoCtrl = $controller('EmpleadoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmpleadoCtrl.awesomeThings.length).toBe(3);
  });
});

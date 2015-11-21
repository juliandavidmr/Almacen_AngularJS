'use strict';

describe('Controller: RolCtrl', function () {

  // load the controller's module
  beforeEach(module('frutasApp'));

  var RolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RolCtrl = $controller('RolCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RolCtrl.awesomeThings.length).toBe(3);
  });
});

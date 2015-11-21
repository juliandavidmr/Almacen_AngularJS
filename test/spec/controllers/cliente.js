'use strict';

describe('Controller: ClienteCtrl', function () {

  // load the controller's module
  beforeEach(module('frutasApp'));

  var ClienteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClienteCtrl = $controller('ClienteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClienteCtrl.awesomeThings.length).toBe(3);
  });
});

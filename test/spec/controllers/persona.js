'use strict';

describe('Controller: PersonaCtrl', function () {

  // load the controller's module
  beforeEach(module('frutasApp'));

  var PersonaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonaCtrl = $controller('PersonaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PersonaCtrl.awesomeThings.length).toBe(3);
  });
});

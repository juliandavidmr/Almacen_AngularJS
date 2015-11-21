'use strict';

describe('Controller: GeneroCtrl', function () {

  // load the controller's module
  beforeEach(module('frutasApp'));

  var GeneroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeneroCtrl = $controller('GeneroCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GeneroCtrl.awesomeThings.length).toBe(3);
  });
});

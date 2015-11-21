'use strict';

describe('Controller: ListapreciosCtrl', function () {

  // load the controller's module
  beforeEach(module('frutasApp'));

  var ListapreciosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListapreciosCtrl = $controller('ListapreciosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListapreciosCtrl.awesomeThings.length).toBe(3);
  });
});

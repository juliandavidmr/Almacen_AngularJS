'use strict';

describe('Controller: ProductoCtrl', function () {

  // load the controller's module
  beforeEach(module('frutasApp'));

  var ProductoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductoCtrl = $controller('ProductoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductoCtrl.awesomeThings.length).toBe(3);
  });
});

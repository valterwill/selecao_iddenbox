/**
 * NavbarController
 * @namespace restaurante.layout.controllers
 */
(function () {
  'use strict';

  angular
    .module('restaurante.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope'];

  /**
   * @namespace NavbarController
   */
  function NavbarController($scope) {
    var vm = this;
  }
})();

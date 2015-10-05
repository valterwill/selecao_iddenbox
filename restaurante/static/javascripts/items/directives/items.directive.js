/**
 * items
 * @namespace restaurante.items.directives
 */
(function () {
  'use strict';

  angular
    .module('restaurante.items.directives')
    .directive('items', items);

  /**
   * @namespace items
   */
  function items() {
    /**
     * @name directive
     * @desc The directive to be returned
     * @memberOf restauranete.items.directives.items
     */
    var directive = {
      controller: 'ItemsController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        items: '=',
        categoria: '='
      },
      templateUrl: '/static/templates/items/items.html'
    };

    return directive;
  }
})();

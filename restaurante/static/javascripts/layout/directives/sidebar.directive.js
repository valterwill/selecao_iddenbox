/**
 * items
 * @namespace restaurante.items.directives
 */
(function () {
  'use strict';

  angular
    .module('restaurante.layout.directives')
    .directive('sidebar', sidebar);

  /**
   * @namespace items
   */
  function sidebar() {
    /**
     * @name directive
     * @desc The directive to be returned
     * @memberOf restauranete.items.directives.items
     */
    var directive = {
      controller: 'IndexController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        categorias: '='
      },
      templateUrl: '/templates/sidebar.html'
    };

    return directive;
  }
})();

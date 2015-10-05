/**
 * Item
 * @namespace restaurante.items.directives
 */
(function () {
  'use strict';

  angular
    .module('restaurante.items.directives')
    .directive('item', item);

  /**
   * @namespace Item
   */
  function item() {
    /**
     * @name directive
     * @desc The directive to be returned
     * @memberOf restaurante.items.directives.Item
     */
    var directive = {
      restrict: 'E',
      scope: {
        item: '='
      },
      templateUrl: '/static/templates/items/item.html'
    };

    return directive;
  }
})();

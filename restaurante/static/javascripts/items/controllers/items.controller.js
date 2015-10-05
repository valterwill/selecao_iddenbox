/**
 * ItemsController
 * @namespace restaurante.items.controllers
 */
(function () {
  'use strict';

  angular
    .module('restaurante.items.controllers')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['$scope'];

  /**
   * @namespace ItemsController
   */
  function ItemsController($scope) {
    var vm = this;

    vm.columns = [];

    activate();
    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf restaurante.items.controllers.itemsController
     */
    function activate() {

      $scope.$watchCollection(function () { return $scope.items; }, render);
      $scope.$watch(function () { return $(window).width(); }, render);
    }

    /**
     * @name calculateNumberOfColumns
     * @desc Calculate number of columns based on screen width
     * @returns {Number} The number of columns containing Items
     * @memberOf restaurante.items.controllers.itemsControllers
     */
    function calculateNumberOfColumns() {
      var width = $(window).width();

      if (width >= 1200) {
        return 4;
      } else if (width >= 992) {
        return 3;
      } else if (width >= 768) {
        return 2;
      } else {
        return 1;
      }
    }


    /**
     * @name approximateShortestColumn
     * @desc An algorithm for approximating which column is shortest
     * @returns The index of the shortest column
     * @memberOf restaurante.items.controllers.itemsController
     */
    function approximateShortestColumn() {
      var scores = vm.columns.map(columnMapFn);
      return scores.indexOf(Math.min.apply(this, scores));

      
      /**
       * @name columnMapFn
       * @desc A map function for scoring column heights
       * @returns The approximately normalized height of a given column
       */
      function columnMapFn(column) {
        var lengths = column.map(function (element) {
          return element.ingredientes.length;
        });

        return lengths.reduce(sum, 0) * column.length;
      }


      /**
       * @name sum
       * @desc Sums two numbers
       * @params {Number} m The first number to be summed
       * @params {Number} n The second number to be summed
       * @returns The sum of two numbers
       */
      function sum(m, n) {
        return m + n;
      }
    }


    function render(current, original) {
        if(current instanceof Array){
          vm.columns = [];
          var aux = [];

          for (var i = 0; i < current.length; ++i) {
            if(current[i].categoria.id == $scope.categoria.id){
              aux.push(current[i]);
            }
          }

          for (var i = 0; i < calculateNumberOfColumns(); ++i) {
            vm.columns.push([]);
          }
          for (var i = 0; i < aux.length; ++i) {
            var column = approximateShortestColumn();
            vm.columns[column].push(aux[i]);
          }
        }
      }
  }
})();

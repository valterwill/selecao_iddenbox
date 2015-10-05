/**
 * IndexController
 * @namespace restaurante.layout.controllers
 */
(function () {
  'use strict';

  angular
    .module('restaurante.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', 'Items', 'Snackbar','$filter','orderByFilter'];

  /**
   * @namespace IndexController
   */
  function IndexController($scope, Items, Snackbar,$filter,orderByFilter) {
    var vm = this;

    vm.items = [];
    vm.categories = [];
    vm.categories_menu = [];
    vm.category = null;
    vm.item_name = null;
    vm.order = null;
    activate();

    $scope.refreshCategory = function(){
      if(vm.category != null) Items.get(vm.category.id,vm.order).then(itemsSuccessFn, itemsErrorFn);
      else Items.all(vm.order).then(itemsSuccessFn, itemsErrorFn);

      function itemsSuccessFn(data, status, headers, config) {
        if(vm.item_name != null )vm.items = data.data.results.filter(function (item) { console.log(item.nome.toString().toLowerCase().indexOf(vm.item_name.toLowerCase())); return item.nome.toString().toLowerCase().indexOf(vm.item_name.toLowerCase()) != -1; });
        else vm.items = data.data.results;
      }

      function itemsErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
    }

    $scope.refreshItems = function(){
      if(vm.category != null) Items.get(vm.category.id,vm.order).then(itemsSuccessFn, itemsErrorFn);
      else Items.all(vm.order).then(itemsSuccessFn, itemsErrorFn);

      function itemsSuccessFn(data, status, headers, config) {
        if(vm.item_name != null )vm.items = data.data.results.filter(function (item) { console.log(item.nome.toString().toLowerCase().indexOf(vm.item_name.toLowerCase())); return item.nome.toString().toLowerCase().indexOf(vm.item_name.toLowerCase()) != -1; });
        else vm.items = data.data.results;
      }

      function itemsErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
    }

    function activate() {
      Items.all(vm.order).then(itemsSuccessFn, itemsErrorFn);
      Items.categories().then(categoriesSuccessFn, itemsErrorFn);

      $scope.$on('item.created', function (event, item) {
        vm.items.unshift(item);
      });

      $scope.$on('item.created.error', function () {
        vm.items.shift();
      });

      function itemsSuccessFn(data, status, headers, config) {
        vm.items = data.data.results;
      }

      function categoriesSuccessFn(data, status, headers, config) {
        vm.categories = data.data.results;
        vm.categories_menu = vm.categories;
      }

      function itemsErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
    }

    $scope.$watch('vm.items', function(newVal, oldVal){
        vm.categories = [];
        vm.items.forEach(function(item) {
          if(vm.categories.indexOf(item.categoria) == -1){
              vm.categories.push(item.categoria);
          }
        });
    }, true);

    $scope.$watch('vm.order', function(newVal, oldVal){
      $scope.refreshItems();
    }, true);

  }
})();

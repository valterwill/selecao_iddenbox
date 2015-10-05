/**
 * Items
 * @namespace restaurante.items.services
 */
(function () {
  'use strict';

  angular
    .module('restaurante.items.services')
    .factory('Items', Items);

  Items.$inject = ['$http'];

  /**
   * @namespace Items
   * @returns {Factory}
   */
  function Items($http) {
    var Items = {
      all: all,
      get: get,
      categories: categories
    };

    return Items;

    ////////////////////
    
    /**
     * @name all
     * @desc Get all Items
     * @returns {Promise}
     * @memberOf restaurante.items.services.items
     */
    function all(order) {
      var params = "";
      console.log(order);
      if (order != null){
          if(order == "false"){
            params = "?order=asc";
          }else{
            params = "?order=desc";
          }
      }
      return $http.get('/api/v1/items/'+params);
    }


    /**
     * @name get
     * @desc Get the Items of a given user
     * @param {string} username The username to get Items for
     * @returns {Promise}
     * @memberOf restaurante.items.services.items
     */
    function get(id,order) {
      var params = "";
      if (order != null){
          if(order == "false"){
            params = "?order=asc";
          }else{
            params = "?order=desc";
          }
      }
      return $http.get('/api/v1/items/'+ id +"/"+params);
    }


    function categories() {
      return $http.get('/api/v1/items/categories/');
    }
  }
})();

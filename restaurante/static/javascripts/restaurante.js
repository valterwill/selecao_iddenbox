(function () {
  'use strict';

  angular
    .module('restaurante', [
      'restaurante.config',
      'restaurante.routes',
      'restaurante.layout',
      'restaurante.items',
      'restaurante.utils'
    ]);

  angular
    .module('restaurante.config', []);

  angular
    .module('restaurante.routes', ['ngRoute']);

  angular
    .module('restaurante')
    .run(run);

  run.$inject = ['$http'];

  /**
   * @name run
   * @desc Update xsrf $http headers to align with Django's defaults
   */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
})();

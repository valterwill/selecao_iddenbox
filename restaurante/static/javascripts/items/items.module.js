(function () {
  'use strict';

  angular
    .module('restaurante.items', [
      'restaurante.items.controllers',
      'restaurante.items.directives',
      'restaurante.items.services'
    ]);

  angular
    .module('restaurante.items.controllers', []);

  angular
    .module('restaurante.items.directives', ['ngDialog']);

  angular
    .module('restaurante.items.services', []);
})();

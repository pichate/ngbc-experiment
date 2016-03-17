(function() {
  'use strict';

  angular
    .module('ngbc')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

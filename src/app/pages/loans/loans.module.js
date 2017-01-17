/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.loans', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('loans', {
          url: '/loans',
          templateUrl: 'app/pages/loans/loans.html',
          title: 'Prestamos',
          controller: 'LoansCtrl as vm',
          sidebarMeta: {
            icon: 'ion-cash',
            order: 0,
          },
        });
  }

})();

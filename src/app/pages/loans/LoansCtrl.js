/**
 * @author a.molina
 * created on 16.01.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.loans')
    .controller('LoansCtrl', LoansCtrl);

  /** @ngInject */
  function LoansCtrl($scope, $uibModal) {
    var vm = this;

    vm.openModal = openModal;
    vm.formNewLoan = {};

    function openModal(page, size) {
      $uibModal.open({
        animation: true,
        templateUrl: page,
        size: size,
        scope: $scope,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    };

  }

})();

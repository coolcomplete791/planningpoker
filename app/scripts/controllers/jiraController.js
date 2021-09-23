angular.module('firePokerApp')
  .controller('jiraController', function ($rootScope, $scope, jiraService) {
      $scope.changeAssignee=function() {
        jiraService.changeAssignee("RNAGARWAL");
      }
  });
;( function(){

  'use strict';

  angular.module('News')

  .controller('SignUpCtrl', ['$scope', 'UsersFactory', '$location',
    function ($scope, UsersFactory, $location) {


      $scope.sign = function(newuser){

        UsersFactory.signUp(newuser).success( function(data){

          $location.path('/login');

        });

      };


  }]);


}());

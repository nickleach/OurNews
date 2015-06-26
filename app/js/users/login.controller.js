;( function(){

  'use strict';

  angular.module('News')

  .controller('LoginCtrl', ['$scope', 'UsersFactory', '$location',
    function ($scope, UsersFactory, $location) {


      $scope.log = function(newuser){

        UsersFactory.logIn(newuser)



      };

      $scope.logOut = function(){

        UsersFactory.logout();

      };

  }]);


}());

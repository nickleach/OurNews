;( function(){

  'use strict';

  angular.module('News')

  .controller('SingleCtrl', ['$scope', '$location', 'ArticleFactory','$routeParams',

   function ($scope, $location, ArticleFactory, $routeParams) {

    var id = $routeParams.id;

    ArticleFactory.getSingle(id).success( function(data){

      $scope.a = data;


    })



  }])


}());

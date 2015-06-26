;( function(){

  'use strict';

angular.module('News')

.controller('EditCtrl', ['$scope', '$location',
 '$routeParams', 'ArticleFactory',
 function ($scope, $location, $routeParams, ArticleFactory) {

  var id = $routeParams.id;

  ArticleFactory.getSingle(id).success( function(data){

    $scope.a = data;


  });

  $scope.editArticle = function(article){

    ArticleFactory.editIt(article).success( function(){

      $location.path('/');

    });

  };

}])


}());

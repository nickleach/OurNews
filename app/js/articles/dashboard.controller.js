;( function(){

  'use strict';

  angular.module('News')

  .controller('DashboardCtrl', ['$scope', '$http', 'PARSE', '$location', 'ArticleFactory',
    function ($scope, $http, PARSE, $location, ArticleFactory) {

    $scope.allArticles = [];

    ArticleFactory.getArticles().success( function(data){


      $scope.allArticles = data.results;

    });


  }]);


}());

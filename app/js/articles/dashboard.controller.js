;( function(){

  'use strict';

  angular.module('News')

  .controller('DashboardCtrl', ['$scope',  '$location', 'ArticleFactory',
    function ($scope, $location, ArticleFactory) {

    $scope.allArticles = [];

    ArticleFactory.getArticles().success( function(data){


      $scope.allArticles = data.results;

    });

    $scope.deleteArt = function(x){

      ArticleFactory.deleteArticle(x).success( function(){

       $scope.allArticles =  _.without($scope.allArticles, x);

      });

    };


  }]);


}());

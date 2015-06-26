;( function(){

  'use strict';

  angular.module('News')

  .controller('NewArticleCtrl', ['$scope',  '$location', 'ArticleFactory',
    function ($scope,  $location, ArticleFactory) {

    $scope.addStory = function(story){

     ArticleFactory.addArticle(story).success( function(){

        $location.path('/');


      });

    };


  }])

}());

;( function(){

  'use strict';

  angular.module('News')

  .controller('NewArticleCtrl', ['$scope', '$http', 'PARSE', '$location', 'ArticleFactory',
    function ($scope, $http, PARSE, $location, ArticleFactory) {

    $scope.addStory = function(story){

     ArticleFactory.addArticle(story).success( function(){

        $location.path('/');


      });

    };


  }])

}());

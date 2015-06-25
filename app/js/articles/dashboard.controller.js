;( function(){

  'use strict';

  angular.module('News')

  .controller('DashboardCtrl', ['$scope', '$http', 'PARSE', '$location',
    function ($scope, $http, PARSE, $location) {

    $scope.allArticles = [];

    $http.get(PARSE.URL + 'classes/article', PARSE.CONFIG).success( function(data){

      console.log(data)
      $scope.allArticles = data.results;

    });


  }]);


}());

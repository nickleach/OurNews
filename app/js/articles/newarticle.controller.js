;( function(){

  'use strict';

  angular.module('News')

  .controller('NewArticleCtrl', ['$scope', '$http', 'PARSE', '$location',
    function ($scope, $http, PARSE, $location) {

    var Story = function(options){
      this.title = options.title;
      this.author = options.author;
      this.date = options.date;
      this.image = options.image;
      this.state = options.state;
      this.story = options.texts;
    };

    $scope.addStory = function(story){

      var s = new Story(story);
      $http.post(PARSE.URL + 'classes/article', s, PARSE.CONFIG).success( function(){

        $location.path('/');


      });

    };


  }])

}());

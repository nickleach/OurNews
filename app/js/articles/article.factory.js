;( function(){

  'use strict';

  angular.module('News')

  .factory('ArticleFactory', ['$http', 'PARSE',function ($http, PARSE) {

    var endpoint = PARSE.URL + 'classes/article/';

    var Story = function(options){
      this.title = options.title;
      this.author = options.author;
      this.date = options.date;
      this.image = options.image;
      this.state = options.state;
      this.story = options.texts;
    };

    var getArticles = function(){

      return $http.get(endpoint, PARSE.CONFIG);

    };

    var addArticle = function(story){
      var newStory = new Story(story);
      return $http.post(endpoint, newStory, PARSE.CONFIG);

    };

    var deleteArticle = function(thisOne){

      var deleteThis = endpoint + thisOne.objectId;

      return $http.delete(deleteThis, PARSE.CONFIG);

    };

    var getSingle = function(id){

      return $http.get(endpoint + id, PARSE.CONFIG);

    };

    var editIt = function(edit){

      var editEndpoint = endpoint + edit.objectId;

      return $http.put(editEndpoint, edit, PARSE.CONFIG);

    };

    return {
      getArticles : getArticles,
      addArticle : addArticle,
      deleteArticle : deleteArticle,
      getSingle : getSingle,
      editIt : editIt
    };
  }])


}());

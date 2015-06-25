;( function(){

  'use strict';

  angular.module('News', ['ngRoute'])

  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {

      headers:{

        'X-Parse-Application-Id' : '1YRJKecQM4jFXPvNhnkT9zGIGwISa5AbV7WnwQrP',
        'X-Parse-REST-API-Key' : 'CmBnpVJho0JuXvZOPuIXtwAqqamt8FLYrurzVjkl'


      }

    }
  })
  .config( [ '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/', {

        templateUrl:'js/articles/dashboard.tpl.html',
        controller:'DashboardCtrl'

      })
      .when('/add', {
        templateUrl: 'js/articles/newarticle.tpl.html',
        controller: 'NewArticleCtrl'
      });

  }]);

}());

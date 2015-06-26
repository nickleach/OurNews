;( function(){

  'use strict';

  angular.module('News', ['ngRoute', 'ngCookies'])

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
      })
      .when('/signup', {
        templateUrl: 'js/users/signup.tpl.html',
        controller: 'SignUpCtrl'
      })
      .when('/login',{
        templateUrl: 'js/users/login.tpl.html',
        controller: 'LoginCtrl'
      })
      .when('/article/:id',{
        templateUrl: 'js/articles/singlearticle.tpl.html',
        controller: 'SingleCtrl'
      })
      .when('/article/:id/edit', {
        templateUrl: 'js/articles/editarticle.tpl.html',
        controller: 'EditCtrl'
      });

  }]);

}());

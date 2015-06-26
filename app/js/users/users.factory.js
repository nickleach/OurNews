angular.module('News')

.factory('UsersFactory', ['$http', 'PARSE',
  function ($http, PARSE) {

  var UserEndpoint = PARSE.URL + 'users';

  var LoginEndpoint = PARSE.URL + 'login?';

  var User = function(options){
    this.username = options.username;
    this.password = options.password;
    this.name = options.name;
    this.email = options.email;


  };

  var signUp = function(user){
    var newUser = new User (user);

    return $http.post(UserEndpoint, newUser, PARSE.CONFIG);

  };

  var logIn = function(user){


    var urlUser = 'username=' + user.username + '&password=' + user.password;

    return $http.get(LoginEndpoint + urlUser, PARSE.CONFIG);

  };

  return {
    signUp : signUp,
    logIn : logIn

  };
}])

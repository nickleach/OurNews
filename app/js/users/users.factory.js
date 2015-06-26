angular.module('News')

.factory('UsersFactory', ['$http', 'PARSE', '$cookies', '$location',
  function ($http, PARSE, $cookies, $location) {

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

  var validateUser = function(){

    var thisUser = $cookies.get('thisUser');

      if(thisUser){
        $location.path('/')
      }else{
        $location.path('/login')
      }

  };


  var logIn = function(user){


    var params = 'username=' + user.username + '&password=' + user.password;

    $http.get(LoginEndpoint + params, PARSE.CONFIG).success( function(data){

      $cookies.put('thisUser', data)

      return validateUser();

    });

  };

  var logout = function(){
    $cookies.remove('thisUser');
    $location.path('/login')
  };



  return {
    signUp : signUp,
    validateUser : validateUser,
    logIn : logIn,
    logout : logout

  };
}])

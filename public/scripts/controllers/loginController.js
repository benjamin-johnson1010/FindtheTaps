console.log('login sourced');

var lock = new Auth0Lock('AZbjJYNI6Xex9lDI8wvgCCdx9NiqHPl8', 'wibajohnson.auth0.com');
var logOutURL = 'https://wibajohnson.auth0.com/v2/logout';

myApp.controller('loginController', ['$scope', '$http', function($scope,$http){
  console.log('NG');
  $scope.newAge = function(){
    console.log($scope.age);
    if($scope.age < 21 || $scope.age === undefined){
    alert("You are not old enough to use this site");
  }
  else{
  $scope.showUser = true;
  $scope.init();
  }
};//end newAage
  //run at controller load
  $scope.init = function(){
    console.log( 'in init' );
    // check if a user's info is saved in localStorage
    if( JSON.parse( localStorage.getItem( 'userProfile' ) ) ){
      // if so, save userProfile as $scope.userProfile
      $scope.userProfile = JSON.parse( localStorage.getItem( 'userProfile' ) );
      console.log( 'loggedIn:', $scope.userProfile );
      //$scope.userProfile.clientID);
      $http({
        method: 'GET',
        url: '/pets',
      }).then(function(response){
        $scope.allPets = response.data;
        console.log('this is from the server', $scope.allPets);

      });
      $scope.showLogin = true;
    }//end if
    else{
      // if not, make sure we are logged out and empty
      emptyLocalStorage();
      $scope.showLogin = false;
    }//end else
  }; // end init function

  $scope.logIn =function(){
    console.log('in logIn scope');
    lock.show(function(err,profile,token){
      if (err) {
        console.error('auth err', err);
      }
      else {
        // save token to localStorage
        localStorage.setItem( 'userToken', token );
        // save user profile to localStorage
        localStorage.setItem( 'userProfile', JSON.stringify( profile ) );
        location.reload();
      } // end no error
    }); //end lock.show
}; // end scope.logIn

$scope.logOut = function(){
   // call our logOutUrl
   $http({
     method:'GET',
     url: logOutURL
   }).then( function( data ){
     // if logged out OK
     if( data.data == 'OK' ){
       // empty localStorage
       emptyLocalStorage();
       $scope.showLogin = false;
     }
   });
 }; // end scope.logOut

 // run init on controller load
 // $scope.init();
}]);//end logInPageController
var emptyLocalStorage = function(){
 localStorage.removeItem( 'userProfile' );
 localStorage.removeItem( 'userToken' );
}; // end emptyLocalStorage

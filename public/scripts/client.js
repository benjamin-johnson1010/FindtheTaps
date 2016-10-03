console.log('client sourced');

var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){

    $routeProvider.
      when("/login", {
        templateUrl: "/views/partials/login.html",
        controller: "loginController"
      }).
      when("/signUp", {
        templateUrl: "../views/partials/signUp.html",
        controller: "signUpController"
      }).
      when("/search", {
        templateUrl: "./views/partials/search.html",
        controller: "searchController"
      }).
      when("/profile", {
        templateUrl: "/views/partials/profile.html",
        controller: "profileController"
      }).
      otherwise({
        redirectTo: "/login"
      });
 }]);

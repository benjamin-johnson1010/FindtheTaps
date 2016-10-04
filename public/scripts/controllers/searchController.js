var key = '&key=AIzaSyAgt1boABfcHeikPyY8Xps1SD5JLfepjcw';
var geoURL = 'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:';
// var placesURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';
// var radiusURL='&radius'
myApp.controller("searchController", ["$scope", "$http", function($scope,$http){
  console.log("OH HAI SEARCH");
$scope.newSearch=function(){
$scope.searchLocation = geoURL + $scope.zipCode + key;
console.log($scope.searchLocation);
$http({
     url: $scope.searchLocation,
     datatype: JSON
   }).then(function(mapData){
    console.log('this is from the server', mapData);
//get latitude
$scope.lat =$scope.newLocation =mapData.data.results[0].geometry.location.lat;
//get longitude
$scope.long=$scope.newLocation =mapData.data.results[0].geometry.location.lng;
  $http({
    url: $scope.serachLocation,
  })
  });//end http for geo call
};//end newSearch
}]);//end searchController

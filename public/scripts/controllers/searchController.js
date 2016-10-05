var key = '&key=AIzaSyAgt1boABfcHeikPyY8Xps1SD5JLfepjcw';
var geoURL = 'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:';
var placesURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';
var radiusURL='&radius=16093.4';
//checks for brewery and taphouse to refine results, which eliminates restaurants
var breweryURL= '&keyword=brewery|taproom|brewing|taphouse=';
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
$scope.lng=$scope.newLocation =mapData.data.results[0].geometry.location.lng;
console.log($scope.lat);
console.log($scope.lng);
$scope.searchArea = placesURL + $scope.lat + ',' + $scope.lng + radiusURL + breweryURL + key;
console.log($scope.searchArea);
  $http({
    url: $scope.searchArea,
    datatype: JSON
  }).then(function(response){
//returns data back from server
    console.log(response.data.results);
//list equals the array of objects of brewery and taphouse
    $scope.list = response.data.results;
  });//then function end for 2nd http call
  });//end http for geo call
};//end newSearch
}]);//end searchController

var key = '&key=AIzaSyAgt1boABfcHeikPyY8Xps1SD5JLfepjcw';
var geoURL = 'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:';
var placesURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';
var radius='&radius=';
var next = '&hasNextPage=true&nextPage()=true';

//checks for brewery and taphouse to refine results, which eliminates restaurants
var breweryURL= '&keyword=brewery|taproom|brewing|taphouse=';
myApp.controller("searchController", ["$scope", "$http", function($scope,$http){
  console.log("OH HAI SEARCH");
$scope.newSearch=function(){
$scope.searchLocation = geoURL + $scope.zipCode + key;
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
if ($scope.miles == 5) {
  $scope.distance = 8046.72;
}
else if($scope.miles == 10){
$scope.distance = 16093.4;
}
else if($scope.miles == 25){
  $scope.distance = 40233.6;
}
else{
  alert("Please select a value");
}
console.log($scope.distance);
$scope.searchArea = placesURL + $scope.lat + ',' + $scope.lng + radius + $scope.distance + next + breweryURL + key;
  $http({
    url: $scope.searchArea,
    datatype: JSON
  }).then(function(response){
//returns data back from server
//list equals the array of objects of brewery and taphouse
    $scope.list = response.data.results;
    console.log($scope.list);
  });//then function end for 2nd http call
  });//end http for geo call
};//end newSearch
$scope.viewLocation=function(data){
  console.log('in viewLocation', data);


};
}]);//end searchController

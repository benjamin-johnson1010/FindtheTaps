var key = '&key=AIzaSyAgt1boABfcHeikPyY8Xps1SD5JLfepjcw';
var geoURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=:';
var placesURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';
var radius='&radius=';
var next = '&hasNextPage=true&nextPage()=true';
var breweryURL= '&keyword=brewery|taproom|brewing|taphouse=';

myApp.controller("searchController", ["$scope", "$http", function($scope,$http){
  console.log("OH HAI SEARCH");
$scope.newSearch=function(){
  console.log($scope.city);
  //eliminate spacing in address make it into array
  $scope.streetArray = $scope.streetName.split(" ");
//set to first word in streetArray
  $scope.addressURL = $scope.streetArray[0];
  //add each word in array to add + so that is seached in url form
  for (var i = 0; i < $scope.streetArray.length-1; i++) {
    $scope.addressURL =  $scope.addressURL + '+' + $scope.streetArray[i + 1];
    }
    //do same for city
    $scope.cityArray = $scope.city.split(" ");
    $scope.cityURL = $scope.cityArray;
    for (var j = 0; j < $scope.cityArray.length-1; j++){
      $scope.cityURL =  $scope.cityURL + '+' + $scope.cityArray[j + 1];
    }
    //$scope.searchLocation = geoURL + $scope.zipCode + key;
$scope.searchLocation = geoURL + $scope.addressURL + $scope.city + "+MN" + key;
console.log($scope.searchLocation = geoURL + $scope.addressURL + '+' + $scope.cityURL + "+" + $scope.stateInitial + key);
$http({
     url: $scope.searchLocation,
     datatype: JSON
   }).then(function(mapData){
    console.log('this is from the api', mapData);
//get latitude
$scope.lat =$scope.newLocation =mapData.data.results[0].geometry.location.lat;
//get longitude
$scope.lng=$scope.newLocation =mapData.data.results[0].geometry.location.lng;
sessionStorage.setItem("lat", $scope.lat);
sessionStorage.setItem("lng", $scope.lng);
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
  sessionStorage.setItem("nameBrew",data.name);
  sessionStorage.setItem("address", data.vicinity);
  sessionStorage.setItem("endLat", data.geometry.location.lat);
  sessionStorage.setItem("endLng", data.geometry.location.lng);
};
}]);//end searchController

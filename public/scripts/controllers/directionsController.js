var directionsURL = 'https://maps.googleapis.com/maps/api/directions/json?origin=';
var key = '&key=AIzaSyAgt1boABfcHeikPyY8Xps1SD5JLfepjcw';
myApp.controller("directionsController", ["$scope", "$http", function($scope,$http){
  console.log('in directionsController');
  $scope.name = sessionStorage.getItem("name");
  $scope.address = sessionStorage.getItem("address");
  $scope.lat =sessionStorage.getItem("lat");
  $scope.lng =sessionStorage.getItem("lng");
  $scope.endLat = sessionStorage.getItem("endLat");
  $scope.endLng = sessionStorage.getItem("endLng");

  console.log($scope.name);
  console.log($scope.address);
  console.log($scope.lat);
  console.log($scope.lng);
  console.log($scope.endLat);
  console.log($scope.endLng);

 $scope.displayDirections = function(){
   console.log('in directions controller');
$scope.searchDirections = directionsURL + $scope.lat + ',' + $scope.lng + '&destination=' + $scope.endLat +','+ $scope.endLng + key;

   $http({
        url: $scope.searchDirections,
        datatype: JSON
      }).then(function(mapData){
       console.log('this is from the directions api', mapData);
   });
 };
}]);
//directionsURL + $scope.lat + ','  $scope.lng + '&destination=place_id + key

var directionsURL = 'https://maps.googleapis.com/maps/api/directions/json?origin=';
var key = '&key=AIzaSyAgt1boABfcHeikPyY8Xps1SD5JLfepjcw';
myApp.controller("directionsController", ["$scope", "$http", '$sce', function($scope,$http, $sce){
  console.log('in directionsController');
  $scope.name = sessionStorage.getItem("name");
  $scope.address = sessionStorage.getItem("address");
  $scope.lat =sessionStorage.getItem("lat");
  $scope.lng =sessionStorage.getItem("lng");
  $scope.endLat = sessionStorage.getItem("endLat");
  $scope.endLng = sessionStorage.getItem("endLng");

 $scope.displayDirections = function(){
   console.log('in directions controller');
$scope.searchDirections = directionsURL + $scope.lat + ',' + $scope.lng + '&destination=' + $scope.endLat +','+ $scope.endLng + key;

   $http({
        url: $scope.searchDirections,
        datatype: JSON
      }).then(function(mapData){
       console.log('this is from the directions api', mapData.data.routes[0].legs[0].steps);
       $scope.direction = mapData.data.routes[0].legs[0].steps;
       $scope.directionResults = function(results){
         return $sce.trustAsHtml(results);
       };
   });
 };
}]);
//directionsURL + $scope.lat + ','  $scope.lng + '&destination=place_id + key

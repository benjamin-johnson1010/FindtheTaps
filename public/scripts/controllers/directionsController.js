var directionsURL = 'https://maps.googleapis.com/maps/api/directions/json?origin=';
var key =
myApp.controller("directionsController", ["$scope", "$http", '$sce', function($scope,$http, $sce){
  console.log('in directionsController');
  $scope.nameBrew = sessionStorage.getItem("nameBrew");
  $scope.address = sessionStorage.getItem("address");
  $scope.lat =sessionStorage.getItem("lat");
  $scope.lng =sessionStorage.getItem("lng");
  $scope.endLat = sessionStorage.getItem("endLat");
  $scope.endLng = sessionStorage.getItem("endLng");
  $scope.clientID = sessionStorage.getItem("clientID");
  $scope.place_id =sessionStorage.getItem("place_id");
 $scope.displayDirections = function(){
   console.log('in directions controller');
$scope.searchDirections = directionsURL + $scope.lat + ',' + $scope.lng + '&destination=' + $scope.endLat +','+ $scope.endLng + key;

   $http({
        url: $scope.searchDirections,
        datatype: JSON
      }).then(function(mapData){
       console.log('this is from the directions api', mapData.data.routes[0].legs[0].steps);
       $scope.direction = mapData.data.routes[0].legs[0].steps;
       //sanitize the directions from google
       $scope.directionResults = function(results){
         return $sce.trustAsHtml(results);
       };//end directionReuslts sanitation
   });//end $http call
 };//end display function
 $scope.visited = function(){
   var changeInput ={
     clientID: $scope.clientID,
     place_id: $scope.place_id
   };
 $http({
   method: 'PUT',
   url: '/brewery',
   data: changeInput,
 }).then(function(data){
console.log('hit', data);
});
 };
}]);
//directionsURL + $scope.lat + ','  $scope.lng + '&destination=place_id + key

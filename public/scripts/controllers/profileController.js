myApp.controller("profileController", ["$scope", "$http", function($scope, $http){
  console.log("Welcome profile");
  // $scope.clientID = sessionStorage.getItem("clientID");
  // $scope.clientID = sessionStorage.getItem("clientID");
  $scope.clientID = sessionStorage.getItem("clientID");
  $scope.name = sessionStorage.getItem("name");

console.log($scope.clientID);
console.log($scope.name);
$http({
        method: 'GET',
        url: '/beer',
      }).then(function(response){
        console.log(response);
        $scope.allLocations = response.data;
        console.log('this is from the server', $scope.allLocations);
        if ($scope.allLocations.length === 0){
          console.log('hit');
        var newProfile = {
          name: $scope.name,
          clientID: $scope.clientID
        };
        $http({
                method: 'POST',
                url: '/beer',
                data: newProfile,
              }).then(function(response){
                console.log('success', response);
                $scope.displayNewUser = response.data.name;

              });
            }
            else {
              console.log($scope.allLocations[0].name);
              $scope.getLocation = $scope.allLocations.name
            }
      });
}]);

myApp.controller("profileController", ["$scope", "$http", function($scope, $http){
  console.log("Welcome profile");
  // $scope.clientID = sessionStorage.getItem("clientID");
  // $scope.clientID = sessionStorage.getItem("clientID");
  $scope.clientID = sessionStorage.getItem("clientID");
  $scope.name = sessionStorage.getItem("name");
// $scope.listOfRanks = [{rank: 1}, {rank: 2}, {rank: 3},{rank: 4},{rank: 5}];
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
              $scope.displayLocation = $scope.allLocations[0].location;
              $scope.getLocation = $scope.allLocations[0].location;
              console.log($scope.allLocations[0].location[0].location);
              console.log($scope.getLocation);

            }
      });
      $scope.newRank = function(rank) {
        //     var sendRank={
 //       rank: rank
 //     }
 //     $http({
 //       method: 'PUT'
 //       url: '/beer',
 //       data: sendRank
 //     })
  };
}]);

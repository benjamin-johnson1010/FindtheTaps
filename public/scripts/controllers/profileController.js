myApp.controller("profileController", ["$scope", "$http", function($scope, $http){
  console.log("Welcome profile");
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
              var getBrewery={
                clientID: $scope.clientID
              };
              $http({
                method: 'GET',
                url:'/brewery',
                data: getBrewery,
              }).then(function(response){
                console.log('brewery get', response);
                $scope.getName = response.data;
                console.log($scope.getName);
              });

            }
      });
      var getLocation;
      $scope.newLocation= function(data){
        getLocation = data;
        console.log(getLocation);
      };
      $scope.newRank = function(rank) {
        console.log(rank);
        console.log(getLocation);
        var newRanking = {
          place_id: getLocation,
          rank: rank
        };
         console.log(newRanking);
        $http({
          method: 'PUT',
          url: '/rank',
          data: newRanking,
        }).then(function(response){
          console.log('OH HAI FROM SERVER',response);
        });
        };

}]);

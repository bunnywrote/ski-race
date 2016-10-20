var app = angular.module("skiApp", []);

app.controller("skiController", function($scope) {
    $scope.intervals = [1,2,3,4,5];
    $scope.checked = [1,2];
    $scope.current = 2;
    $scope.showed = 2;
   
    var athlete = angular.element(document.getElementById("athlete-id"));
   
    var trackWidth = angular.element(document.getElementById("ski-track"))[0].clientWidth;
    var intervalWidth = trackWidth/$scope.intervals.length;
    var athletePos = athlete.css("left", intervalWidth*$scope.checked.length + intervalWidth/2 + "px");
    

    console.log(trackWidth + "/" + intervalWidth);

    $scope.showInfo = function(position){
        if($scope.checked.indexOf(position) >= 0){
            $scope.showed = position;
        }
    }

    $scope.moveForward = function(){
        $scope.checked.push($scope.checked[$scope.checked.length-1]+1)
        athletePos = athlete.css("left", intervalWidth*$scope.checked.length + intervalWidth/2 + "px");
    }
});
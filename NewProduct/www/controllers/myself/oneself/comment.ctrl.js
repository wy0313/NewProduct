angular.module("myApp").controller("commentCtrl",function($scope){
	$scope.visible = false;
	$scope.toggle = function () {
	  $scope.visible = !$scope.visible;
	}

})
angular.module("myApp").controller("knowCtrl",function($scope,$http){
	$http.get("controllers/know/know.json")
        .success(function(aa){
        $scope.quan=aa.s;
    })
    
})

angular.module("myApp").controller("scoreCtrl",function($scope,$stateParams,$http){
	$scope.list=[];
	$http.get("http://119.10.11.121:8587/Api/Question/GetQuestionList?category_id="+$stateParams.id+"&user_id=1")
	.then(function(data){
		console.log(data.data.RetValue)
		var data=data.data.RetValue;	
		$scope.list=data
	})
	
})
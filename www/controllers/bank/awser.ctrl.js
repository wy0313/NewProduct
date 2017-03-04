angular.module("myApp").controller("awserCtrl",function($scope,$http,$stateParams){
	var id=$stateParams.id;
	$scope.list=[];
	$http.get("http://119.10.11.121:8587/Api/Question/GetQuestionMain?id="+id+"&user_id=1")
		 .then(function(data){
		 	var data=data.data.RetValue;
		 	console.log(data)
		 	$scope.list=data;
		 },function(error){
		 	console.log(error)
		 })
})
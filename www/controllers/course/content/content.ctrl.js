angular.module("myApp").controller("contentCtrl",function($scope,courseServer,userServer,$stateParams){
	
	userId = userServer.getUserId();

	courseServer.getDetail({
		user_id:userId,
		id:$stateParams.cateId
	},function(data){
		$scope.detail=data.RetValue;
	})

	 	
})
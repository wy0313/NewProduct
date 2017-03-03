angular.module("myApp").controller("knowCtrl",function($scope,knowledgeServer,userServer){
	var userId=userServer.getUserId();
	console.log(userId)
})
 
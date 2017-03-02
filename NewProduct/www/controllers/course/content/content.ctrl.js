angular.module("myApp").controller("contentCtrl",function($scope,httpServer,$stateParams){
	
    httpServer.get("Course/GetCourseMain",{user_id:"1",id:$stateParams.cateId},
    	function(data){
			// console.log(data.data.RetValue)
			$scope.detail=data.data.RetValue;

		},function(){
			
		}
	)

	 	
})
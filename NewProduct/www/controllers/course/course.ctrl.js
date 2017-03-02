angular.module("myApp").controller("courseCtrl",function($scope,httpServer){
	httpServer.get("Course/GetCourseCategory",{user_id:"1"},function(data){
		console.log(data)
		$scope.title=data.data.RetValue;
	},function(){
		
	})

	$scope.getID=function(index){
		var list=document.querySelectorAll(".course a");
		id=list[index].getAttribute("data-id");
		// console.log(id);
		add(id)
	}	

	function add(id){
		httpServer.get("Course/GetCourseList",{user_id:"1",category_id:id,pagesize:"10",pageindex:"1"},function(data){
			console.log(data.data)
			$scope.list=data.data.RetValue;
		},function(){
			
		})
	}
	add(0)
})
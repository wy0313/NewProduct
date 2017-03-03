angular.module("myApp").controller("courseCtrl",function($scope,userServer,courseServer){
	userId = userServer.getUserId();
	
	courseServer.getCourse({

		user_id:userId

	},function(data){

		$scope.title=data.RetValue;

	})

	
	$scope.getID=function(index){

		var list=document.querySelectorAll(".course nav a");
		id=list[index].getAttribute("data-id");
		for(var i=0;i<list.length;i++){
			list[i].setAttribute("class","");
		}
		
		list[index].setAttribute("class","on");

		add(id)
		
	}

	function add(id){
		
		courseServer.getList({
			user_id:userId,
			category_id:id,
			pagesize:"10",
			pageindex:"1"
		},function(data){
			
			$scope.list=data.RetValue;
			
		})
	}
	
	add("84")
})
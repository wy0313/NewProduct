angular.module("myApp").controller("bankCtrl",function($scope,$http,$ionicSlideBoxDelegate){
	$scope.list1=[];
	$scope.list2=[];
		$http.get("http://119.10.11.121:8587/Api/Question/GetQuestionCategory?user_id=1")
		 .then(function(data){
		 	$scope.list1=data.data.RetValue;
		 	$ionicSlideBoxDelegate.update();//重新获取滚动区域的大小重新计算
		 	(function getDate(i){
		 		if(i<$scope.list1.length){
		 			var id=$scope.list1[i].id;
		 			$http.get("http://119.10.11.121:8587/Api/Question/GetQuestionCategory?parent_id="+id+"&user_id=1")
		 				.then(function(data){	
		 					$scope.list1[i].data=data.data.RetValue;	
		 					getDate(i+1)
							
		 				},function(error){
		 					console.log(error)
		 				})
		 		}else{
		 			$scope.getID(0)
		 		}
		 	}(0))
		 },function(error){
		 	console.log(error)
		 })

		$scope.getID=function(index){
			// var navs=document.querySelectorAll(".bank_nav2");
			//console.log(navs)
			
			var list=document.querySelectorAll(".bank_nav2 a");
			id=list[index].getAttribute("data-id");
			$http.get("http://119.10.11.121:8587/Api/Question/GetQuestionCategoryList?parent_id="+id+"&user_id=1")
				.then(function(data){
					// console.log(data) 
					$scope.list2=data.data.RetValue;
					for(var j=0;j<$scope.list2.length;j++){
						id=$scope.list2[j].id
						getList(id)
					}
					function getList(index){
						$http.get("http://119.10.11.121:8587/Api/Question/GetQuestionList?category_id="+id+"&user_id=1")
						.then(function(data){
							var score=data.data.RetValue;
						},function(error){
							console.log(error)
						})
					}
					
					for(var i=0;i<list.length;i++){
						list[i].setAttribute("class","");
					}	
					list[index].setAttribute("class","on")	 			
				},function(error){
					console.log(error)
				})
		}
})
		
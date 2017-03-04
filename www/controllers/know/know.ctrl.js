angular.module("myApp").controller("knowCtrl",function($scope,userServer,knowServer){
	  var   userId = userServer.getUserId();

	  
        $scope.viewMenu  = [];
        knowServer.GetTitleCategory({user_id:userId},function(data){
                 
              $scope.viewMenu = data.data.RetValue;

              // console.log( $scope.viewMenu )

              function  getSubList(id){
                     for(var n=0;n<=id.length-1;n++){

                        (function(i){
	                     	knowServer.GetSubMenuCategory({
	                  	    	parent_id:id[n].id,
	                            user_id: userId
	                  	    },function(data2){
	                  	    	id[i].Sublist = data2.data.RetValue
	                  	    	 //console.log(id[i])
	                  	    })
	                     })(n) 
                     }
              }

              for(var key in $scope.viewMenu){
                    
                 (function(i){
                 	  //console.log(i)
                 	knowServer.GetMenuCategory({
              	    	parent_id:$scope.viewMenu[i].id,
                        user_id: userId
              	    },function(data2){
              	    	$scope.viewMenu[i].menu = data2.data.RetValue
              	    	// console.log($scope.viewMenu[i])
              	    	getSubList( $scope.viewMenu[i]['menu'])
              	    })
                 })(key)  
              	    
              }
        })
        
       
})

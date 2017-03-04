angular.module("myApp").controller("knowQuanCtrl",function($scope,$stateParams,knowServer,userServer){
	         var   userId = userServer.getUserId();                                 
           var   listId = $stateParams.quan;
                 
                 console.log(listId)

                 $scope.listMenu  = [];

                  knowServer.GetSubListCategory({
                      category_id:listId,
                      user_id: userId
                  },function(dat){
                    $scope.listMenu = dat.data.RetValue
                      console.log(dat)
                  })

})




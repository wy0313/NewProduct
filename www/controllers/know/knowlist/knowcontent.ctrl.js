angular.module("myApp").controller("knowcontentCtrl",function($scope,$stateParams,knowServer,userServer){
	         var   userId = userServer.getUserId();                                 
           var   listId = $stateParams.ti;
                 
                 console.log(listId)

                 $scope.listMenu  = [];

                  knowServer.GetSubcontentCategory({
                       id:listId,
                      user_id: userId
                  },function(dat){
                    $scope.listMenu = dat.data.RetValue
                      console.log(dat)
                  })

})
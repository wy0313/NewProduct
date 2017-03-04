angular.module("myApp").controller("knowListCtrl",function($scope,$stateParams,knowServer,userServer){
	         var   userId = userServer.getUserId();                                 
           var   listId = $stateParams.id;

                 $scope.listMenu  = [];

                  knowServer.GetSubMenuCategory({
                    parent_id: listId,
                      user_id: userId
                  },function(dat){

                     if (dat.data.RetValue) {
                       $scope.listMenu = dat.data.description
                     }
                    $scope.listMenu = dat.data
                      console.log(dat)
                  })

})

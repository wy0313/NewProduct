angular.module("myApp").controller("knowListDetailCtrl",function($scope,$stateParams,knowServer,userServer){
	         var   userId = userServer.getUserId();                                 
           var   DetaillistId = $stateParams.Cid;

                 $scope.listDetail  = [];

              /*  knowServer.GetSubListCategory({
                    category_id: DetaillistId,
                      user_id: userId
                  },function(dat){
                    $scope.listDetail = dat.data.RetValue
                      console.log(dat.data.RetValue)
                  })*/


                  knowServer.GetSubMenuCategory({
                    parent_id: DetaillistId,
                      user_id: userId
                  },function(dat){
                    $scope.listMenu = dat.data
                      console.log(dat)

                   
                  })
                       
})

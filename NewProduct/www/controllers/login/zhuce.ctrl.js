angular.module("myApp").controller("zhuceCtrl",function($scope,userServer,$state){
	
	$scope.userMobile='';
    $scope.userPwd='';
    $scope.userCode="";

    $scope.send=function(){
    	userServer.Parameters({
    		mobile:this.userMobile
    	},function(res){
    		console.log(res);
    	},function(error){
    		console.log(error);
    	})
    }

	$scope.zhu = function(){
        userServer.Register({
			LoginMobile :this.userMobile ,
			LoginCode : this.userCode, 
			Pwd : this.userPwd,

		},function(res){
			// console.log(res)
			if(res.data.RetValue == true){

				$state.go("login")

			}else{

				alert("验证码有误")
				
			}
		},function(error){
			console.log(error)
		})


    }

})
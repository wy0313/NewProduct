angular.module("myApp").controller("wangjiCtrl",function($scope,userServer,$state){

	$scope.userMobile='';
	$scope.userCode="";

	$scope.send=function(){
		userServer.RepassSmsSend({

			mobile:this.userMobile

		},function(res){
			console.log(res);
		},function(error){
			console.log(error);
		})
	}
		
	$scope.next=function(){
		userServer.SmsVerify({
		 	mobile: this.userMobile,
		  	smsCode: this.userCode
		},function(res){
			if(res.data.RetValue == true){

				$state.go("change")

			}else{

				alert("验证码有误")
				
			}
		},function(error){
			console.log(error);
		})
	}
})
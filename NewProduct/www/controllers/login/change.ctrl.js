angular.module("myApp").controller("changeCtrl",function($scope,$state,userServer){
	      
        $scope.userPwd='';
        $scope.userpwd='';
                         
        $scope.change = function(){
            console.log(this.userPwd+","+this.userpwd)          
            if(this.userPwd==this.userpwd){
                $state.go("login");
            }else{
                alert("密码有误")
            }
        }
})  
angular.module("myApp").controller("changeCtrl",function($scope,$state,userServer){
	      
        $scope.userPwd='';
        $scope.userpwd='';
                         
        $scope.change = function(){
                 
            if(this.userPwd==this.userpwd){
                userServer.ReUserPassWord({

                    mobile:15101019367,
                    new_password:this.userPwd

                },function(data){
                    console.log(data)
                    if(data.data.RetValue){
                        $state.go("login");
                    }
                },function(err){
                    console.log(err)
                })  
                 
            }else{
                alert("密码有误")
            }  
            
        }
})  
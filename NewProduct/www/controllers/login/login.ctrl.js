angular.module("myApp").controller("loginCtrl",function($scope,$state,userServer){
	      
         $scope.userName='';
         $scope.userpwd='';
                         
         $scope.loginDo = function(){
                              
             userServer.Login({
             	LoginName:this.userName,
             	Pwd : this.userpwd
             },function(data){
               if(data.title=="success"){
                    $state.go("index")
               }
             },function(){
             	  //alert('登陆失败')
             }) 
         }
})  
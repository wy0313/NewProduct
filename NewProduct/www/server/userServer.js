<<<<<<< HEAD
angular.module( 'myApp' ).factory( 'userServer',function( getHttp,$state ){
	
return {
		// 登录
		Request : function( opt,successCallback ){
			getHttp.post( 'Account/Login',{
				LoginName : opt.username,
				Pwd : opt.pwd
			},function(data){
				successCallback( data )
			} )
		},
		// 渲染题库
		topicTitle:function( successCallback ){
			getHttp.get( "Question/GetQuestionCategory",{
			user_id : "1"
			},function( data ){
				successCallback(data.data.RetValue);
			} )
		},
		nav : function( successCallback ){
			getHttp.get( "Question/GetQuestionCategory",{
		 		parent_id : "52",
				user_id : "1"
			},function( data ){
				successCallback(data.data.RetValue);
			} )
		},
		getUserId :function(){
			if( window.localStorage['user'] ){
				return JSON.parse( window.localStorage['user'] ).id
			}else{
				$state.go( "myLogin" )
			}
		}
		

	}


} )


=======
angular.module('myApp').factory('userServer',function(httpServer,$ionicPopup,$state){
	 
	  return  {
		  Register : function(options,successCallback,errorCallback){
			   httpServer.post('Account/Register',{
					LoginMobile : options.LoginMobile,
					LoginCode : options.LoginCode, 
					Pwd : options.Pwd
			   },function( res ){
					successCallback( res )
			   },function( error ){
					errorCallback( error )
			   })
		  },
		  Login:function(options,successCallback,errorCallback){
			   httpServer.post( 'Account/Login',{
					   LoginName : options.LoginName,
					   Pwd : options.Pwd
			   },function( res ){
					   if ( res.data.RetValue ){
							  window.localStorage['user'] = JSON.stringify( res.data.RetValue )    
					   }else{
							var alertPopup = $ionicPopup.alert({
								   title: '提示',
								   template: res.data.description
								 });
								 alertPopup.then(function(res) {
								   console.log('Thank you for not eating my delicious ice cream cone');
								 });
							}
							successCallback( res.data )
							// console.log( res.data )
			   },function( error ){
					  errorCallback( error )
			   } )  
		  },

		  getUserId : function(){
			   if (window.localStorage['user']) {
					return   JSON.parse( window.localStorage['user']).id
			   }else{
					  
					$state.go('login') ;
			   }
		  }
	  }
})
>>>>>>> baf21e2bb691a363fcc2c639879b42304054f479

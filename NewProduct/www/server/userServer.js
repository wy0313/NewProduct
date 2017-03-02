angular.module('myApp').factory(function(httpServer){
     
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
                   } )  
          }
      }
})
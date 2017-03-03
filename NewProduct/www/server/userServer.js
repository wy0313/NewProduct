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



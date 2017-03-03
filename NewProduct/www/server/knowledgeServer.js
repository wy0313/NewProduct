angular.module( 'myApp' ).factory( 'knowledgeServer',function( getHttp ){
	
return {
		// 登录
		getTitleCategory : function( opt,successCallback ){
			getHttp.get( 'Knowledge/GetKnowledgeCategory',{
				user_id : opt.user_id
			},function(data){
				successCallback( data.data )
			})
		},
		// 渲染题库
		getMenuCategory:function( opt,successCallback ){
			getHttp.get( 'Knowledge/GetKnowledgeCategory',{
				user_id : opt.user_id,
				parent_id : opt.parent_id
			},function(data){
				successCallback( data.data )
			})
		},
		getSubMenuCategory : function( opt,successCallback ){
			getHttp.get( 'Knowledge/GetKnowledgeCategoryList',{
				user_id : opt.user_id,
				parent_id : opt.parent_id
			},function(data){
				successCallback( data.data )
			})
		}
		

	}


} )



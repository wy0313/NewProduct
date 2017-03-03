angular.module('myApp').factory("myselfServer",function(httpServer){
    return  {
    	// 获取信息
    	getAccount:function(successCallback){
    		httpServer.post("Account/Account/UpdateUserName",
            function(data){
				successCallback(data.data)
                console.log(data)
			},function(err){
				console.log(err);
			})
    	},
        // 我的消息
        getMessage:function(opt,successCallback){
            httpServer.get("Account/GetMessageList",{
                id:opt.id,
                pageSize:opt.pageSize,
                pageIndex:opt.pageIndex
            },
            function(data){
                successCallback(data.data)
            },function(err){
                console.log(err);
            })
        },
        // 我的笔记
        getNotice:function(opt,successCallback){
            httpServer.get("Account/GetNoticeList",{
                id:opt.id,
                pageSize:opt.pageSize,
                pageIndex:opt.pageIndex
            },
            function(data){
                successCallback(data.data)
            },function(err){
                console.log(err);
            })
        },
        // 分页获取文章列表
        getNews:function(opt,successCallback){
            httpServer.get("Account/GetNewsList",{
                id:opt.id,
                category_id:opt.category_id,
                pageSize:opt.pageSize,
                pageIndex:opt.pageIndex
            },
            function(data){
                successCallback(data.data)
            },function(err){
                console.log(err);
            })
        },
        // 根据文章ID获取文章详细信息
        getNewsMain:function(opt,successCallback){
            httpServer.get("Account/GetNewsList",{
                id:opt.id,
                user_id:opt.user_id
            },
            function(data){
                successCallback(data.data)
            },function(err){
                console.log(err);
            })
        }
    }
})
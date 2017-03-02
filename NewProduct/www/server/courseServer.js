angular.module('myApp').factory("courseServer",function(httpServer){
    return  {
    	// 获取课程
    	getCourse:function(opt,successCallback){
    		httpServer.get("Course/GetCourseCategory",{
    			user_id:opt.user_id
    		},function(data){
				successCallback(data.data)
			},function(err){
				console.log(err);
			})
    	},
    	// 获取课程列表
    	getList:function(opt,successCallback){
    		
    		httpServer.get("Course/GetCourseList",{
    			user_id:opt.user_id,
    			category_id:opt.category_id,
    			pagesize:opt.pagesize,
    			pageindex:opt.pageindex
    		},function(data){
				
				successCallback(data.data)

			},function(err){
				console.log(err);
			})
    	},
    	// 获取详情
    	getDetail:function(opt,successCallback){

    		httpServer.get("Course/GetCourseMain",{
    			user_id:opt.user_id,
    			id:opt.id
    		},function(data){
				
				successCallback(data.data)

			},function(err){
				console.log(err);
			})
    	}
    }
})
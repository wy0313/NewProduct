angular.module( 'myApp' ).factory( "httpServer",function( $http,$ionicLoading ){

	var getApi = "http://119.10.11.121:8087/Api/";
	var key = "2D7E7K96-DAC5-4526-96Y3-C60CKEC4U120";


	//获得10位是加错
    var timestr = function() {
        var tmp = Date.parse(new Date()).toString();
        tmp = tmp.substr(0, 10);
        return tmp;
    };


    var _sendRequest = function( url,method,data,successCallback, errorCallback ){
    	var timeStr = timestr();

    	var sign ='';
    	for( var keyName in data ){
          sign += keyName.toLocaleLowerCase()+"="+data[keyName]+"&";
        }
    	sign += timeStr+key;

    	var _options = {};
    	if(  method == "GET" ){
    		_options = {
	    		url : getApi+url,
	    		method : method,
	    		params : data,
	    		headers : {
	              'Content-Type': 'application/x-www-form-urlencoded',
	              'Ts' : timeStr,
	              "Sign": md5(sign)
	            }
	    	}
    	}else{
    		_options = {
	    		url : getApi+url,
	    		method : method,
	    		data : data,
	    		headers : {
	              'Content-Type': 'application/x-www-form-urlencoded',
	              'Ts' : timeStr,
	              "Sign": md5(sign)
	            },
	            transformRequest: function (obj) {
	              if(!obj) return '';
	              var str = [];
	              for (var p in obj) {
	                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
	              }
	              return str.join("&");
	            }
	    	}
    	};

    	$ionicLoading.show({
	      template: '正在加载数据...'
	    });

    	$http( _options ).then(
	    	function( res ){
	    		successCallback( res )
	    		$ionicLoading.hide();
	    	},
	    	function( res ){
	    		errorCallback( res )
	    		$ionicLoading.hide();
	    	}
    	)


    }


    return {
    	get : function( url,data,successCallback, errorCallback ){
    		_sendRequest( url,'GET',data,successCallback, errorCallback )
    	},
    	post : function( url,data,successCallback, errorCallback ){
    		_sendRequest( url,'POST',data,successCallback, errorCallback )
    	}
    }



} )
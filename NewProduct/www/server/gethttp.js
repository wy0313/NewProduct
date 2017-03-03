angular.module( 'myApp' ).factory( 'getHttp',function( $http,$ionicLoading ){
	var getApi = "http://119.10.11.121:8087/Api/";
	var key = "2D7E7K96-DAC5-4526-96Y3-C60CKEC4U120";

	// 获取前十位时间戳;
	var timest = function(){
		var tmp = Date.parse( new Date() ).toString();
		tmp = tmp.substr( 0,10 );
		return tmp;
	}

	var _sendRequest = function( url,method,data,successCallback,errorCallback ){

		var ts = timest();
		var sign = "";
		for( var keyName in data ){
			sign += keyName.toLocaleLowerCase()+"="+data[keyName]+"&";
		}
		sign += ts+key;

		var _options = {};
		if( method == "GET" ){
			_options = {
				url:getApi+url,
				method : method,
				params : data,
				headers : {
		              'Content-Type': 'application/x-www-form-urlencoded',
		              'Ts' : ts,
		              "Sign": md5(sign)
		            }
				}
		}else{
			_options = {
				url:getApi+url,
				method : method,
				data : data,
				headers : {
		              'Content-Type': 'application/x-www-form-urlencoded',
		              'Ts' : ts,
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
		}

		$ionicLoading.show({
	      template: 'Loading...'
	    });
		$http(_options).then( 
			function(result){
				successCallback( result )
				$ionicLoading.hide();
			},
			function(error){
				console.log(error);
				$ionicLoading.hide()
			}
		 )


	}

	return {
		get:function( url,data,successCallback,errorCallback ){
			_sendRequest( url,"GET",data,successCallback,errorCallback );
		},
		post:function( url,data,successCallback,errorCallback ){
			_sendRequest( url,"POST",data,successCallback,errorCallback );
		}
	}


} )
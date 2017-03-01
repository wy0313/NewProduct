//用$代替new
function $(rag){
	return new MyQuery(rag)
}

function MyQuery(selector){
	this.result=[]
	switch(typeof selector){
		case "function":
		addEvent(window,"load",selector);
		break;
		case "string":
			switch(selector.charAt(0)){
				case "#":
				var obj=document.getElementById(selector.substring(1));
				this.result.push(obj);
				break;
				case ".":
				this.result=getClass(document,selector.substring(1));
				break;
				default:
				this.result=document.getElementsByTagName(selector);
			}
		break;
		case "object":
		this.result.push(selector);
		break;
	}
}

//DOM 2级事件处理程序
function addEvent(obj,event,fn){
	if(obj.addEventListener){
		obj.addEventListener(event,function(ev){
			if(fn.call(obj)==false){
				//DOM下
				ev.stopPropagation();
				//阻止默认行为
				ev.preventDefault();
			}
		},false);
	}else if(obj.attachEvent){//IE中，this指的是window，并不是当前对象
		obj.attachEvent("on"+event,function(){
			if(fn.call(obj)==false){
				//阻止默认行为
				window.event.returnValue=false;
				//阻止冒泡
				window.event.cancelBubble=true;
				return false;
			}
		});
	}else{
		obj["on"+event]=fn;
	}
}

//获取className的方法
function getClass(obj,className){
	var elems=obj.getElementsByTagName('*')
	var reg=new RegExp("\\b"+className+"\\b")
	var arr=[]
	for(var i=0;i<elems.length;i++){
		if(reg.test(elems[i].className)){
			arr.push(elems[i])
		}	
	}
	return arr
}



function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
	}else{
		return getComputedStyle(obj,null)[attr]
	}
	return this
}



function getindex(obj){
	var brothers=obj.parentNode.children;
	for(var i=0;i<brothers.length;i++){
		if(brothers[i]==obj)
		return i
	}	
}

//封装点击事件
MyQuery.prototype.click=function(fn){
	for(var i=0;i<this.result.length;i++){
		addEvent(this.result[i],"click",fn)
	}
	return this;
}


//封装css改变样式
MyQuery.prototype.css=function(att,value){
	if(arguments.length==2){//设置样式
		for(var i=0;i<this.result.length;i++){
			this.result[i].style[att]=value
		}
	}else{
		if(typeof attr=='string'){
			return getStyle(this.result[0],att)
		}
		else{
			for(var i=0;i<this.result.length;i++){
				for(var t in attr){
					this.result[i].style[t]=attr[t];
				}
			}
		}
	}
	return this;
}


//显示
MyQuery.prototype.show=function(fn){
	for(var i=0;i<this.result.length;i++){
		this.result[i].style.display="block"
	}
	return this;
}


//隐藏
MyQuery.prototype.hide=function(fn){
	for(var i=0;i<this.result.length;i++){
		this.result[i].style.display="none"
	}
	return this;
}


//找在某个元素下有几个子元素
MyQuery.prototype.find=function(str){
	var arr=[];
	for(var i=0;i<this.result.length;i++){
		switch(str.charAt(0)){
			case ".":
				var getdate=getClass(this.result[i],str.substring(1))
				arr=arr.concat(getdate);
				break;
			default:
				var arr2=this.result[i].getElementsByTagName(str);
				for(var j=0;j<arr2.length;j++){
					arr.push(arr2[j])
				}
		}
	}
	var newQuery=$();
	newQuery.result=arr;
	return newQuery;
}




//当前元素的第几个元素
MyQuery.prototype.index=function(){
	return getindex(this.result[0])
}



//查找第几个
MyQuery.prototype.eq=function(n){
	return $(this.result[n])
}



MyQuery.prototype.html=function(){
	return $(this.result[0].innerHTML)
}



//获取属性
MyQuery.prototype.attr=function(attr,value){
	if(attr=="class")attr="className";
	if(arguments.length==2){
		for(var i=0;i<this.result.length;i++){
			this.result[i][attr]=value;
		}
	}
	else
	{
		if(typeof attr=='string'){
			return this.result[0][attr]
		}else{//获取多个属性，类似对象的方法
			for(var i=0;i<this.result.length;i++){
				for(var t in attr){
					this.result[i].style[t]=attr[t]
				}	
			}
		}
	}
	return this;
}


MyQuery.prototype.extend=function(name,fn)
{
	//this.extend[name]=fn;
	//放到原型上
	MyQuery.prototype[name]=fn
}



MyQuery.prototype.hover=function(fn,fn1){
	for(var i=0;i<this.result.length;i++){
		addEvent(this.result[i],"mouseover",fn);
		addEvent(this.result[i],"mouseout",fn1);
	}
	return this;
}


//删除当前的
MyQuery.prototype.remove=function(){
	this.result[0].parentNode.removeChild(this.result[0])

	return this;
}



MyQuery.prototype.append=function(obj){
	for(var i=0;i<obj.result.length;i++){
		this.result[0].appendChild(obj.result[i])
	}
	return this;
}

//绑定事件
MyQuery.prototype.bindevent=function(event,fn){
	for(var i=0;i<this.result.length;i++){
		addEvent(this.result[i],event,fn) 
	}
	return this;
}

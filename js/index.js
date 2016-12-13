
	
	//通过ID获取元素
	function getById(id){
		return document.getElementById(id);
	}

	//通过class获取元素
	function getByClassName(parent,className){
		return parent.getElementsByClassName(className)
	}

	//通过tagname获取元素
	function getByTagName(parent,tagName){
		return parent.getElementsByTagName(tagName)
	}

	//添加事件监听
	function addEvent(element,type,handle){
		if(element.addEventListener){
			element.addEventListener(type,handle,false);
		}else if(element.attach){
			element.attach(type,handle);
		}else{
			element["on"+type] = handle;
		}
	}





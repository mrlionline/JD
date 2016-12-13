var right_tools = getById("right_tools")
var tools_head_main_item = getByClassName(right_tools,"tools_head_main_item")
function show_right_tools(){
	right_tools.style.right = "-270px"
}

function tools_addEvent(){
	for (var i = 0; i < tools_head_main_item.length-1; i++) {
		addEvent(tools_head_main_item[i],"mouseenter",addClassName)
		addEvent(tools_head_main_item[i],"mouseleave",removeClassnameHover)
	}
}
tools_addEvent();

function addClassName(){
	this.className = this.className+" tools_head_main_item_hover"
}
function removeClassnameHover(){
	this.className = this.className.substring(0,(this.className.indexOf(" tools_head_main_item_hover")))
}

function removeClassNameSelected(){
	for (var i = 0; i < tools_head_main_item.length-1; i++) {
		if (tools_head_main_item[i].className.slice(-25) === " tools_head_item_selected") {
			tools_head_main_item[i].className = tools_head_main_item[i].className.substring(0,(tools_head_main_item[i].className.indexOf(" tools_head_item_selected")))
		}
	}
}

//阻止事件冒泡到document
right_tools.onclick = function(e){
	stopPropagation(e)
}
tools_head_main_item[1].onclick = function(e){
	show_right_tools();
	show_body_item(1)
	tools_addEvent()
	this.removeEventListener("mouseenter",addClassName)
	this.removeEventListener("mouseleave",removeClassnameHover)
	removeClassNameSelected()
	e.target.parentNode.className = "tools_head_main_item tools_head_main_cart tools_head_item_selected"
}
tools_head_main_item[3].onclick = function(e){
	show_right_tools();
	tools_addEvent()
	show_body_item(3)
	this.removeEventListener("mouseenter",addClassName)
	this.removeEventListener("mouseleave",removeClassnameHover)
	removeClassNameSelected()
	e.target.parentNode.className = "tools_head_main_item tools_head_main_history tools_head_item_selected"
}

//除了1，3外其它body_item点击
function item_click(e,ele,index){
	show_right_tools();
	show_body_item(index)
	tools_addEvent()
	ele.removeEventListener("mouseenter",addClassName)
	ele.removeEventListener("mouseleave",removeClassnameHover)
	removeClassNameSelected()
	e.target.parentNode.className = e.target.parentNode.className.substring(0,(e.target.parentNode.className.indexOf(" tools_head_main_item_hover"))) + " tools_head_item_selected"
}

tools_head_main_item[0].onclick = function(e){
	item_click(e,this,0)
}
tools_head_main_item[2].onclick = function(e){
	item_click(e,this,2)
}
tools_head_main_item[4].onclick = function(e){
	item_click(e,this,4)
}
tools_head_main_item[5].onclick = function(e){
	item_click(e,this,5)
}
tools_head_main_item[6].onclick = function(e){
	item_click(e,this,6)
}

//显示相应的body_item
	var body_item = getByClassName(right_tools,"body_item")
	function show_body_item(index){
		for (var i = 0; i < body_item.length; i++) {
			if (body_item[i].className.substring(20) === " body_item_show") {
				body_item[i].className = body_item[i].className.substring(0,20) + " body_item_hide"
			}
		}
		body_item[index].className = body_item[index].className.substring(0,20) + " body_item_show"
	}

//隐藏right_tools函数
function hide_right_tools(){
	right_tools.style.right = "-540px"
	removeClassNameSelected()
	tools_addEvent()
}

document.onclick = function(){
	hide_right_tools()
}

// 关闭按钮
	var tools_body_close = getByClassName(right_tools,"tools_body_close")
	for (var i = 0; i < tools_body_close.length; i++) {
		tools_body_close[i].onclick = function(){
			hide_right_tools()
		}
	}

//阻止事件冒泡
	function stopPropagation(e){
		if (e.stopPropagation) {
			e.stopPropagation()
		}else{
			e.cancelBubble = true
		}
	}

//返回顶部
	var tools_head_main_top = getByClassName(right_tools,"tools_head_main_top")[0]
	tools_head_main_top.onclick = function(){
		document.body.scrollTop = 0;
	}
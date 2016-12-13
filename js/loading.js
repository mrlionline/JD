var search_fix = getById("search_fix")
var lift = getById("lift")
var timer1;
var timer2;
var lessThan1500 = false;
var greaterThan1500 = true;
var onscroll_finished = true;
var lift_item = getByClassName(lift,"lift_item")
var old_offsetTop = document.body.scrollTop
//左侧导航条点击
var section_arr = [];
	section_arr[0] = getById("section_4")
	section_arr[1] = getById("section_5")
	section_arr[2] = getById("section_6")
	section_arr[3] = getById("section_7")
	section_arr[4] = getById("section_8")
	section_arr[5] = getById("section_9")
	section_arr[6] = getById("section_10")
	section_arr[7] = getById("section_11")
	section_arr[8] = getById("section_12")
	section_arr[9] = getById("section_14")

var greaterThan1450 = true;
var greaterThan2600 = true;
var greaterThan4200 = true;
var greaterThan5500 = true;
var greaterThan6900 = true;
var greaterThan9800 = true;
var greaterThan650 = true;
var lessThan650 = false;
window.onscroll = function(){
	var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
	if ( onscroll_finished ) {  //自动滚动停止后才会进这里
		old_offsetTop = t

	//显示search_fix  start
		if (t > 650 && greaterThan650) {
			lessThan650 = true;
			greaterThan650 = false;
			search_fix.className = "search_fix show_search_fix"
		}
		if (t < 650 && lessThan650) {
			lessThan650 =false;
			greaterThan650 = true;
			search_fix.className = "search_fix"
		}
	//显示search_fix  end

	//左侧导航栏  start	
		if (t <= 1500 && lessThan1500) {
			lessThan1500 = false;
			greaterThan1500 = true;
			lift.className = "lift hide_lift";
			timer2 = setTimeout(function(){
				lift.style.display = "none";
			},500)
		}
		if (t > 1500 && greaterThan1500) {
			lessThan1500 = true;
			greaterThan1500 = false;
			clearTimeout(timer2)
			lift.className = "lift show_lift";
			lift.style.display = "block";
		}
		if (t > 1500 && t <= 2000 && flag[0]) {
			changeFlag(0)
			item_active(0)
		}
		if (t > 2000 && t <= 2650 && flag[1]) {
			changeFlag(1)
			item_active(1)
		}
		if (t > 2650 && t <= 3250 && flag[2]) {
			changeFlag(2)
			item_active(2)
		}
		if (t > 3250 && t <= 3850 && flag[3]) {
			changeFlag(3)
			item_active(3)
		}
		if (t > 3850 && t <= 4450 && flag[4]) {
			changeFlag(4)
			item_active(4)
		}
		if (t > 4450 && t <= 5050 && flag[5]) {
			changeFlag(5)
			item_active(5)
		}
		if (t > 5050 && t <= 5550 && flag[6]) {
			changeFlag(6)
			item_active(6)
		}
		if (t > 5550 && t <= 6150 && flag[7]) {
			changeFlag(7)
			item_active(7)
		}
		if (t > 6150 && t <= 7050 && flag[8]) {
			changeFlag(8)
			item_active(8)
		}
		if (t > 7050 && flag[9]) {
			changeFlag(9)
			item_active(9)
		}
	//左侧导航栏  end

	//滚动加载数据  start
		if (t > 1450 && t <= 2600 && greaterThan1450) {
			greaterThan1450 = false
			get_fn("section_4")
			get_fn("banner1")
			get_fn("section_5",-570)
			
		}
		if (t > 2600 && t <= 4200 && greaterThan2600) {
			greaterThan2600 = false
			get_fn("section_6",-570)
			get_fn("section_7",-1140)
			get_fn("section_8",-570)
		}
		if (t > 4200 && t <= 5500 && greaterThan4200) {
			greaterThan4200 = false
			get_fn("banner2")
			get_fn("section_9",-1140)
			get_fn("section_10",-570)
		}
		if (t > 5500 && t <= 6900 && greaterThan5500) {
			greaterThan5500 = false
			get_fn("section_11",-570)
			get_fn("section_12",-380)
			get_fn("banner3")
			get_fn("section_13")
		}
	}
		if (t > 6900 && t <= 9800 && greaterThan6900) {
			greaterThan6900 = false;
			get_json_fn("item1")
			
		}
		if (t > 9800 && greaterThan9800) {
			greaterThan9800 = false;
			get_json_fn("item2")
		}
	//滚动加载数据  end

}


var flag = [];
for (var i = 0; i < 10; i++) {
	flag[i] = true;
}

function changeFlag(index){
	for (var i = 0; i < 10; i++) {
		flag[i] = true;
	}
	flag[index] = false;
}

//左侧导航条选中函数
function item_active(num){
	for (var i = 0; i < lift_item.length-1; i++) {
		lift_item[i].className = "lift_item"
	}
	lift_item[num].className = "lift_item active"
}


//左侧导航条点击
function lift_click(lift_item,ele,index){
	lift_item.onclick = function(){
		clearInterval(timer1)
		onscroll_finished = false;
		document.body.scrollTop = old_offsetTop;
		//将flag全变成false  在自动滚动时不加active变颜色了
			for (var i = 0; i < 10; i++) {
				flag[i] = false;
			}
			item_active(index)
		var a = document.body.scrollTop;
		var b = ele.offsetTop-50;
		if (a > b) {
			var step = (a - b)/100
			old_offsetTop = ele.offsetTop-50
			timer1 = setInterval(function(){
				document.body.scrollTop -= step;
				if (document.body.scrollTop - (ele.offsetTop-50) < step) {
					clearInterval(timer1)
					document.body.scrollTop = ele.offsetTop -50
					changeFlag(index)
					onscroll_finished = true;
				}
			},1)
		}else{
			var step = (a - b)/100
			old_offsetTop = ele.offsetTop-50
			timer1 = setInterval(function(){
				document.body.scrollTop -= step;
				if (document.body.scrollTop - (ele.offsetTop-50) > step) {
					clearInterval(timer1)
					document.body.scrollTop = ele.offsetTop -50
					changeFlag(index)
					onscroll_finished = true;
				}
			},1)
		}
	}
}
for (var i = 0; i < lift_item.length-1; i++) {
	lift_click(lift_item[i],section_arr[i],i)
}

//返回顶部点击
lift_item_top = getByClassName(lift,"lift_item_top")[0]
// var shortcut = getById("shortcut")
lift_item_top.onclick = function(){
	var step = document.body.scrollTop/100;
	var timer3 = setInterval(function(){
		document.body.scrollTop-=step;
		if (document.body.scrollTop < step) {
			clearInterval(timer3)
			document.body.scrollTop = 0;
		}
	},1)
}

//滚动时ajax从后台调取最后“还没逛够”的json数据
function get_json_fn(fileName){
	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest()
	}else{
		request = new ActiveXObject('Microsoft.XMLHTTP')
	}

	var href = window.document.location.href;
	var pathName=window.document.location.pathname;
    var pos=href.indexOf(pathName);
    var localhostPaht=href.substring(0,pos);

	var url = localhostPaht+"/JD/js/"+fileName+".json";
	request.open('GET',url)
	request.send()

	request.onreadystatechange = function(){
		if (request.readyState === 4 && request.status === 200) {
			var data = JSON.parse(request.responseText)[fileName];
			var section_14 = getById("section_14")
			var bd_list = getByClassName(section_14,"bd_list")[0]

			for(var p in data){
				bd_list.innerHTML += '<li class="bd_item"><a href="" class="bd_lk"><img src="images/18-section-14/'+p+'.jpg" alt="" class="bd_img"><div class="bd_item_info"><p class="bd_item_tit">'+data[p].tit+'</p><p class="bd_item_price"><i>¥</i><span>'+data[p].price+'</span></p></div></a></li>'
			}
		}
	}
}

//滚动时从后台调取section和banner数据
function get_fn(fileName,num){
	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest()
	}else{
		request = new ActiveXObject('Microsoft.XMLHTTP')
	}

	var href = window.document.location.href;
	var pathName=window.document.location.pathname;
    var pos=href.indexOf(pathName);
    var localhostPaht=href.substring(0,pos);

	var url = localhostPaht+"/JD/sections/"+fileName+".html";
	request.open('GET',url)
	request.send()

	request.onreadystatechange = function(){
		if (request.readyState === 4 && request.status === 200) {
			var data = request.responseText
			var id = getById(fileName);
			var w = getByClassName(id,"w")[0]
			w.innerHTML = data
			if (fileName != "banner1" && fileName != "banner2" && fileName != "banner3" && fileName != "section_4" && fileName != "section_13") {
				var ele = getById(fileName)
				bd_logo_list_move(ele,num)
			}
		}
	}
}


//LOGO处点击箭头LOGO滑动
function bd_logo_list_move(element,offset){

	show_bd_btn_wrap(element)

	var bd_btn_l = getByClassName(element,"bd_btn_l")
	var bd_btn_r = getByClassName(element,"bd_btn_r")
	var bd_logo_list = getByClassName(element,"bd_logo_list")
	var bd_logo_list_arr = []

	for (var i = 0; i < bd_btn_l.length; i++) {
		bd_btn_l[i].index = i;
		bd_btn_r[i].index = i;
		bd_logo_list_arr[i] = offset;
		bd_btn_l[i].onclick = function(){
			bd_logo_list_arr[this.index] -= offset
			bd_logo_list_move_fn(this.index,bd_logo_list_arr[this.index],bd_logo_list_arr[this.index]+30)
			if (bd_logo_list_arr[this.index] === 0) {
				bd_logo_list_arr[this.index] = offset*2
			}
		}

		bd_btn_r[i].onclick = function(){
			bd_logo_list_arr[this.index] += offset
			bd_logo_list_move_fn(this.index,bd_logo_list_arr[this.index],bd_logo_list_arr[this.index]-30)
			if (bd_logo_list_arr[this.index] === offset*3) {
				bd_logo_list_arr[this.index] = offset;
			}
		}
	}
	function bd_logo_list_move_fn(num,dis1,dis2){
		bd_logo_list[num].style.transform = "translateX("+dis2+"px)"
		bd_logo_list[num].style.transitionProperty = "transform"
		bd_logo_list[num].style.transitionDuration = ".4s"
		setTimeout(function(){
			bd_logo_list[num].style.transform = "translateX("+dis1+"px)"
			bd_logo_list[num].style.transitionProperty = "transform"
			bd_logo_list[num].style.transitionDuration = ".4s"
			if (dis1 === 0) {
				setTimeout(function(){
					bd_logo_list[num].style.transform = "translateX("+offset*2+"px)"
					bd_logo_list[num].style.transitionProperty = "transform"
					bd_logo_list[num].style.transitionDuration = "0s"
				},400)
			}
			if (dis1 === offset*3) {
				setTimeout(function(){
					bd_logo_list[num].style.transform = "translateX("+offset+"px)"
					bd_logo_list[num].style.transitionProperty = "transform"
					bd_logo_list[num].style.transitionDuration = "0s"
				},400)
			}
		},400)
	}
}

//LOGO处鼠标滑入显示小箭头
function show_bd_btn_wrap(element){
	//获取element下的box_l和box_r,鼠标滑入显示logo箭头
	var box_l = getByClassName(element,"box_l")[0]
	var box_m = getByClassName(element,"box_m")[0]
	var box_r = getByClassName(element,"box_r")[0]
	var bd_btn_wrap_l = getByClassName(box_l,"bd_btn_wrap")[0]
	if (bd_btn_wrap_l === undefined) {
		var w = getByClassName(element,"w")[0]
		show_bd_btn_wrap_fn(w)
	}else{
		show_bd_btn_wrap_fn(box_l)
		show_bd_btn_wrap_fn(box_r)
	}

	if (box_m != undefined) {
		show_bd_btn_wrap_fn(box_m)
	}

	function show_bd_btn_wrap_fn(e){
		var bd_btn_wrap = getByClassName(e,"bd_btn_wrap")[0]
		e.onmouseenter = function(){
			bd_btn_wrap.style.display = "block"
		}
		e.onmouseleave = function(){
			bd_btn_wrap.style.display = "none"
		}

	}
}





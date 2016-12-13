

	var mydate;
	var surplus_time;
	function getTime(){
		mydate = new Date();
		minute = mydate.getMinutes();
		second = mydate.getSeconds();
		surplus_time = (120-minute-1)*60+(60-second)
	}
	getTime()

	var section_1 = getById("section_1")
	var r_time_hour = getByClassName(section_1,"r_time_hour")[0]
	var r_time_minute = getByClassName(section_1,"r_time_minute")[0]
	var r_time_second = getByClassName(section_1,"r_time_second")[0]
	function surplus_time_fn(){
		var shi = parseInt(surplus_time/(60*60))
		var fen = parseInt(surplus_time%(60*60)/60)
		var miao = parseInt(surplus_time%(60*60)%60)
		r_time_hour.innerText = checkTime(shi);
		r_time_minute.innerText = checkTime(fen);
		r_time_second.innerText = checkTime(miao);
		if (surplus_time == 0) {
			getTime()
		}else{
			surplus_time--;
		}
	}
	setInterval(surplus_time_fn,1000)

	function checkTime(i){
		if(i < 10){
			return "0"+i;
		}
		return i;
	}

// 选项卡
	var section_3 = getById("section_2")
	var body_head_items = getByClassName(section_3,"body_head_item")
	var body_head_line = getByClassName(section_3,"body_head_line")[0]
	for (var i = 0; i < body_head_items.length; i++) {
		body_head_items[i].index = i;
		body_head_items[i].onmouseover = function(){
			var offset = this.index*78
			body_head_line.style.transform = "translateX("+offset+"px)"
			show_body_content_item(this.index)
		}
	}
	function show_body_content_item(index){
		var body_content_item = getByClassName(section_3,"body_content_item")
		for (var i = 0; i < body_content_item.length; i++) {
			body_content_item[i].style.display = "none"
		}
		body_content_item[index].style.display = "block";
	}
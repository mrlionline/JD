
// 3.main_right区域 start
	
	// 新闻选项卡
		//促销滑入
		var promotion = getById("promotion")
		var notice_c = getById("notice_c")
		var promotion_c = getById("promotion_c")
		promotion.onmouseover = function(){
			var news_line = getById("news_line")
			if (news_line.className === "line moreToRight") {
				news_line.className = "line moreToLeft"
			}
			notice_c.style.display = "none";
			promotion_c.style.display = "block";
		}
		// 公告滑入
		var notice = getById("notice")
		notice.onmouseover = function(){
			var news_line = getById("news_line")
			if (news_line.className === "line" || news_line.className === "line moreToLeft") {
				news_line.className = "line moreToRight"
			}
			notice_c.style.display = "block";
			promotion_c.style.display = "none";
		}

	//服务入口
	var main_right = getById("main_right")
	var service_tab_head = getByClassName(main_right,"tab_head")
	var tab_content = getById("tab_content")
	var tab_head_a = getByClassName(main_right,"tab_head_a")
	var service_txt = [];
	var this_service_num = -1;							//记录当前鼠标在第几个框，点击关闭时赋值为3，让第3个框的mouseenter失效，mouseleave时赋值-1初始化
	var service_tab_head_move = 300;
	//前4个服务 鼠标悬停 内容向上滑入
	for (var i = 0; i < service_tab_head.length; i++) {

		service_tab_head[i].index = i;
		tab_head_a[i] = getByClassName(service_tab_head[i],"service_lk")[0]
		service_txt[i] = getByClassName(tab_head_a[i],"service_txt")[0]

		var service_tab_head_move;
		var service_tab_head_move_time=200;
		service_tab_head[i].onmouseenter = function(){

			if (this.index != this_service_num) {
				var index = this.index
				service_tab_head_move = setTimeout(function(){
					this_service_num = this.index;
					var service_corner = getByClassName(document,"service_corner")[0]

					tab_content.className = "tab_content tab_content_moveUp";    //给内容块加向上动画类名
					for (var j = 0; j < tab_head_a.length; j++) {				 //让前4个块向上滑到文字
						tab_head_a[j].className = "service_lk tab_head_a tab_head_moveUp"
					}

					for (var k = 0; k < service_txt.length; k++) {      		//给前四个块上边框和字体颜色归默认
						service_txt[k].style.borderTopColor = "#FFF";
						service_txt[k].className = "service_txt"
					}

					service_txt[index].style.borderTopColor = "#e01121"		//给选中的变上边框颜色
					service_txt[index].className = "service_txt service_txt_on"	//给选中的变字体颜色
					show_tab_content(index)
					service_tab_head_move_time = 0;
				},service_tab_head_move_time)
			}

		}
		service_tab_head[i].onmouseleave = function(){
			clearTimeout(service_tab_head_move)
			this_service_num = -1;
		}
		
	}

		//内容向上滑入函数
		function show_tab_content(index){
			var tab_content_item = getByClassName(tab_content,"tab_content_item")
			for (var i = 0; i < tab_content_item.length; i++) {
				tab_content_item[i].style.display = "none";
			}
			tab_content_item[index].style.display = "block";
		}

		//内容区的关闭按钮功能
		var tab_content_close = getById("tab_content_close")
		tab_content_close.onclick = function(){
			service_tab_head_move_time = 200;
			this_service_num = 3;
			tab_content.className = "tab_content tab_content_moveDown"; 
			for (var j = 0; j < tab_head_a.length; j++) {				 //让前4个块向下滑到正常位置
				tab_head_a[j].className = "service_lk tab_head_a tab_head_moveDown"
			}
			for (var k = 0; k < service_txt.length; k++) {      		//给前四个块上边框和字体颜色归默认
				service_txt[k].style.borderTopColor = "#FFF";
				service_txt[k].className = "service_txt"
			}
		}

		//电影票,话费下 子选项卡切换函数
			function change_imm(element){
				var element_lis = getByClassName(element,"item_head");
				var onmouseoverEleNum;
				for (var i = 0; i < element_lis.length; i++) {
					element_lis[i].index = i;
					element_lis[i].onmouseover = function(){         
						for (var j = 0; j < element_lis.length; j++) {
							element_lis[j].className = "item_head";				//清空所有li的class
						}
						element_lis[this.index].className = "item_head item_li_selected"; //给当前li加selected背景
						show_form(this.index)									//显示与当前li的index对应的form
					}
				}
				//显示form函数
				function show_form(index){
					var element_forms = getByTagName(element,"form");
					for (var i = 0; i < element_forms.length; i++) {		//清空(隐藏)所有form
						element_forms[i].className = "";
					}
					element_forms[index].className = "item_form_selected";  //显示与当前li的index对应的form
				}
			}
		//机票 游戏 子选项卡 切换函数
			function change_plane_tickey(element,time){
				var item_head = getByClassName(element,"item_head")
				var item_head_move;
				for (var i = 0; i < item_head.length; i++) {
					item_head[i].index = i;
					item_head[i].onmouseover = function(){
						clearInterval(timer)
						var index = this.index;
						item_head_move = setTimeout(function(){
							for (var j = 0; j < item_head.length; j++) {    //将所有li背景去掉
								item_head[j].className = "item_head"
							}
							item_head[index].className = "item_head item_li_selected"
							item_body_move(index);
						},time)
					}
					item_head[i].onmouseout = function(){
						clearTimeout(item_head_move)
					}
				}
				//item_body动画函数
				var item_body_offset = "(0px"
				var timer;
				function item_body_move(index){
					var item_body = getByClassName(element,"item_body")[0]
					var item_body_move_offset = 0-index*180;
					var theOffset = get_item_body_offset();
					if (item_body_move_offset < theOffset) {
						timer = setInterval(function(){
							if (theOffset == item_body_move_offset) {
								clearInterval(timer)
							}else{
								theOffset -= 4;
								item_body.style.transform = "translateX("+theOffset+"px)"
								item_body_offset = item_body.style.transform
							}
						},1)
					}
					if (item_body_move_offset > theOffset) {
						timer = setInterval(function(){
							if (theOffset == item_body_move_offset) {
								clearInterval(timer)
							}else{
								theOffset += 4;
								item_body.style.transform = "translateX("+theOffset+"px)"
								item_body_offset = item_body.style.transform
							}
						},1)
					}
				}
				//获取当前item_body偏移量
				function get_item_body_offset(){
					var theOffset = item_body_offset.split("(")[1].split("px")[0]
					return Number(theOffset)
				}
			}

	//话费下 子选项卡切换
		var tab_content_item1 = getByClassName(tab_content,"tab_content_item1")[0]
		change_imm(tab_content_item1)
	//电影票下 子选项卡切换
		var tab_content_item3 = getByClassName(tab_content,"tab_content_item3")[0]
		change_imm(tab_content_item3)
	//机票下 子选项卡切换
		var tab_content_item2 = getByClassName(tab_content,"tab_content_item2")[0]
		change_plane_tickey(tab_content_item2,300)
	//游戏下 子选项卡切换
		var tab_content_item4 = getByClassName(tab_content,"tab_content_item4")[0]
		change_plane_tickey(tab_content_item4,1)

	//话费下
	//选择话费金额后显示实际金额
		var price_money = getById("price_money")
		price_money.onchange = function(){
			var index = price_money.selectedIndex;
			var selected_value = price_money.options[index].value;
			var realMoney = getById("realMoney")
			realMoney.innerText = selected_value;
		}
	//选择流量后 显示的金额
		var flow = getById("flow")
		flow.onchange = function(){
			var index = flow.selectedIndex;
			var selected_value = flow.options[index].value;
			var flow_price = getById("flow_price")
			flow_price.innerText = selected_value
		}
	//变更套餐
		var select_month_price = getById("select_month_price")
		select_month_price.onchange = function(){
			var index = select_month_price.selectedIndex;
			var value = select_month_price.options[index].value;
			var month_price = getById("month_price")
			month_price.innerText = value;
		}
	//游戏下
		//点卡和QQ的面值 点击事件
		function item_body12_input(element,date,input_pop){
			var row2 = getByClassName(element,"row2")[0]
			var red_price = getByClassName(element,"price")[0]
			var inputBtn = getByTagName(row2,"input")[0]
			var input_pop_lis = getByTagName(input_pop,"li")
			var inOut = false;
			inputBtn.onclick = function(){					//点击input显示下面金额列表
				input_pop.style.display = "block";
			}
			inputBtn.onmouseover = function(){
				inOut = false;
			}
			inputBtn.onmouseleave = function(){
				inOut = true;
				setTimeout(isOut_fn,100)
			}
			input_pop.onmouseover = function(){
				inOut = false;
			}
			input_pop.onmouseleave = function(){
				inOut = true;
				setTimeout(isOut_fn,100)
			}

			for (var i = 0; i < input_pop_lis.length; i++) {
				input_pop_lis[i].index = i;
				input_pop_lis[i].onclick = function(){
					inputBtn.value = this.innerText
					red_price.innerText = "¥"+date[this.index]
					input_pop.style.display = "none";
				}
			}

			//鼠标移出input也移出ul时隐藏ul
			function isOut_fn(){
				if (inOut) {
					input_pop.style.display = "none";
				}
			}
		}

		//点卡 下面 面值input 点击
			var item_body1 = getByClassName(tab_content_item4,"item_body1")[0]
			var item_body1_date = ["19.00","56.00","105.00","190.00"]
			var item_body1_input_pop = getByClassName(getById("item_body1_input"),"input_pop")[0]
			item_body12_input(item_body1,item_body1_date,item_body1_input_pop)
		//QQ 下面 面值input 点击
			var item_body2 = getByClassName(tab_content_item4,"item_body2")[0]
			var item_body2_date = ["0.96","4.78","9.53","14.37","19.04","28.58","38.39","47.67","57.29","95.70","115.00","191.29","477.99","579.00","772.00","960.00","1447.50","1919.90"]
			var item_body2_input_pop = getByClassName(getById("item_body2_input"),"input_pop")[0]
			item_body12_input(item_body2,item_body2_date,item_body2_input_pop)
	//京东无线
		var j_mobile = getById("j_mobile")
		var J_mobile_timer ;
		j_mobile.onmouseenter = function(){
			J_mobile_timer = setInterval(function(){
				var j_mobile_pop = getById("j_mobile_pop")
				j_mobile_pop.style.display = "block";
			},200)
		}
		j_mobile.onmouseleave = function(){
			clearInterval(J_mobile_timer)
			var j_mobile_pop = getById("j_mobile_pop")
			j_mobile_pop.style.display = "none";
		}
	

// 3.main_right区域 end
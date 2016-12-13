// 2.轮播图区域 start

	//轮播图
		var showIndex = 0;                         //控制显示第几张图片
		var slider_img = getById("slider_img");

		//切换图片
		var isrunning = false;
		var imgs = getByTagName(slider_img,"img")
		function animate(index){
			isrunning = true;
			setTimeout(function(){isrunning = false;},300)
			for (var i = 0; i < imgs.length; i++) {
				if (imgs[i].className === "hide") {
					imgs[i].className = ""
				}
				if (imgs[i].className === "show" || imgs[i].className === "first") {
					imgs[i].className = "hide";
					imgs[index].className = 'show';
				}
			}
		}

		//下一张按钮
		var next = getById("next");
		next.onclick = function(){
			if (!isrunning) {
				if (showIndex === 7) {
					showIndex = 0;
					animate(showIndex)
					showBtn(showIndex)
				}else{
					showIndex += 1;
					animate(showIndex)
					showBtn(showIndex)
				}
			}
		}
		//上一张按钮
		var prev = getById("prev")
		prev.onclick = function(){
			if (!isrunning){
				if (showIndex === 0) {
					showIndex = 7;
					animate(showIndex)
					showBtn(showIndex)
				}else{
					showIndex -= 1;
					animate(showIndex)
					showBtn(showIndex)
				}
			}
		}

		//小圆点切换图片
		var slider_btn = getById("slider_btn")
		var dotBtn = getByTagName(slider_btn,"span")

		//小圆点点亮
		function showBtn(index){
			for (var i = 0; i < dotBtn.length; i++) {
				if (dotBtn[i].className === "on") {
					dotBtn[i].className = "";
					break;
				}
			}
			dotBtn[index].className = "on";
		}

		//小圆点切换图片
		for (var i = 0; i < dotBtn.length; i++) {
			dotBtn[i].index = i;
			dotBtn[i].onmouseover = function(){
				showIndex = this.index;
				animate(showIndex)
				showBtn(showIndex)
			}
		}

		//自动轮播
		var autoPlay;
		function play(){
			autoPlay = setInterval(function(){
				next.onclick()
			},3000)
		}
		play()

		// 鼠标悬停 轮播暂停
		var slider_main = getById("slider_main")
		slider_main.onmouseover = function(){
			clearInterval(autoPlay)
		}
		slider_main.onmouseout = function(){
			play()
		}

// 2.轮播图区域 end
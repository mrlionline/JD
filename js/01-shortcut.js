// 1.shortcut顶部区域 start

	//选择省份点击函数
	function provinceClick(e){
		if(e.target.nodeName === "A"){
			var provinceA = getByTagName(provinceList,"a")
			var provinceSpan = getByTagName(getById("choseProvince"),"span")
			for (var i = 0; i < provinceA.length; i++) {
				if (provinceA[i].className === 'active') {
					provinceA[i].className = '';
				}
			}
			e.target.className = 'active';
			provinceSpan[0].innerHTML = e.target.innerHTML;
			provinceList.style.display = "none";
		}
	}

	//已选省份鼠标滑入函数
	function choseProvince_in_fn(){
		provinceList.style.display = "block";
	}
	function choseProvince_out_fn(){
		provinceList.style.display = "none";
	}
	//已选省份鼠标滑入函数
	var choseProvince = getById("choseProvince")
	addEvent(choseProvince,"mouseenter",choseProvince_in_fn)
	addEvent(choseProvince,"mouseleave",choseProvince_out_fn)

	//选择省份点击函数
	var provinceList = getById("provinceList");
	addEvent(provinceList,"click",provinceClick)

// 1.shortcut顶部区域 end
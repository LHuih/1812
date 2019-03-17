
//滚动条
var dj = document.querySelector(".dianji");
	var clientH = document.documentElement.clientHeight;
	var oboxH = parseInt(getComputedStyle(dj,false).height);
	var timer;
	dj.onclick = function(){
		clearInterval(timer);
		timer=setInterval(function(){
			if(document.documentElement.scrollTop <= 0){
				clearInterval(timer);
			}else{
				document.documentElement.scrollTop -= 70;
			}
		},10)	
	}
	

//下拉菜单
	var otxt = document.querySelector(".txt");
	var xial = document.querySelector(".box .cd");
	var ali = xial.children;
	var index = -1;
	
	otxt.onfocus = function(){  	//点击TXT文本框之后让ul显示
		xial.style.display = "block";
		
	}
	
	document.onclick = function(){   //点击document，ul在消失；
		xial.style.display = "none";
	}
	
	otxt.onclick = function(eve){   //创建事件对象，点击获取获取事件对象
		var e = eve || window.event;  //兼容
		stopBubble(e);                //清除TXT的冒泡事件
	}

	function stopBubble(e){          //创建组阻止冒泡事件
		if(e.stopPropagation){		//判断及解决兼容问题
			e.stopPropagation();	
		}else{
			e.cancelBubble = true;  //默认值是false
		}
	}
	
	for(var i=0;i<ali.length;i++){        //遍历
		ali[i].abc = i ;  //
		ali[i].onmouseover = function(){   //遍历后得到每一个li，创建li鼠标移动事件
			for(var j=0;j<ali.length;j++){  //遍历li
				ali[j].className = "";      //得到每个li的名字；然后改变他的class
			}
				this.className = "active";  //循环结束后，鼠标移动的那个元素，给他添加class
				index = this.abc ; 
		}
		
		ali[i].onmouseout = function(){  //创建当鼠标离开的事件
			this.className = "";         //当前这个li的class在变无，相当于取消效果
		}
		
		ali[i].onclick = function(){	//创建点击li事件
			otxt.value = this.innerHTML;  //点击li的时候，把当前标签里面的文本内容
		}
	}
	
	otxt.addEventListener("keydown",function(eve){  //给otxt绑定键盘按下事件，用的监听式绑定事件
		var e = eve || window.event ;     //获取事件的兼容,因为要拿到按下的那个键，所以先拿到事件的对象
		var code = e.keyCode || e.which ;  //获取键盘码的兼容
		
		if(code == 38){
			if(index <= 0){
				index = ali.length-1; 
			}else{
				index--;
			}
			setClass()
		}
		if(code == 40){
			if(index == ali.length-1){
				index = 0;
			}else{
				index ++ ;
			}
			setClass();
		}
		
		if(code == 13){
			otxt.value = ali[index].innerHTML;
			xial.style.display = "none";
			otxt.blur();
			ali[index].className = "";
			index = -1;
		}
	},false)
	
	function setClass(){
		for(var j=0;j<ali.length;j++){
				ali[j].className = "";				
			}
		ali[index].className = "active";
	}
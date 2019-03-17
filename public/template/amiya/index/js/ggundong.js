
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
	
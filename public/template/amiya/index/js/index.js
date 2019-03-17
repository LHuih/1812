$(window).scroll(function(){

	var top = $(window).scrollTop();
	
	if(top > 200){
		$("#ewm").stop().show()
		$("#b-r").stop().show()	
	}else{
		$("#ewm").stop().hide()	
		$("#b-r").stop().hide()	
	}
	})

//	$(".dianji").click(function(){
////		if()
////		setInterval(function() {
//			$("html").scrollTop == $(window).scrollTop(0);
////		},30)
//	})
	
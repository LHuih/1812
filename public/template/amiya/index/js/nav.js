//菜单
;(function($){
    "use strict";
    $.fn.nav = function(){
        this.children("li").hover(function(){
        	$(this).children(".li1").stop().toggle().parent().children().children("img").stop().toggle()
        },function(){
			$(this).children(".li1").stop().toggle().parent().children().children("img").stop().toggle()
        })
        return this;
    }
    
})(jQuery);

    
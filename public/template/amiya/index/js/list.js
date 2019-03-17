var box = document.querySelector(".yifu .box")
function List(){
		this.url="/api/shuju";
		this.load()
		this.addEvent()
	}
	List.prototype.load =function(){
		var that=this;
		ajaxGet(this.url).then(function(res){
			that.res=JSON.parse(res);
			that.display()
			console.log(that.res);
		},function(code){
			console.log("请求失败"+code);
		})
	}
	List.prototype.display=function(){
		var str="";
		for(var i=0;i<this.res.page_data;i++){
			str += `<div id="${this.res[i].goosid}">
						<img src="${this.res[i].url}" class="tp"/>
						<div class="a-b">
						
						<div class="y-t">
							<b>${this.res[i].name}</b>
							<p>${this.res[i].namet}</p>
						</div>
						
						<div class="y-b clear">
							<span class="new">秒杀价:¥<em>${this.res[i].price}</em></span>
							<span class="old">市场价:¥<em>${this.res[i].lod}</em></spsan>
						</div>
						
						<div class="qiang">	
							<a class="btn">马上抢</a>
							<p class="buy">17人已买</p>
						</div>
						
						</div>
						
					</div>`;
		}
		box.innerHTML = str;
	
	}
	
	List.prototype.addEvent=function(){
		$(".box").on("click","a",function(){
			location.href="xqing.html?"+$(this).parent().parent().parent().attr("id")
		})
	}
	
	new List()
	
	
	
	
	
	
	
	
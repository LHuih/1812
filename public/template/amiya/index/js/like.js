var box = document.querySelector(".like .shangpin")
console.log(box)
function List(){
		this.url="../json/like.json";
		this.load()
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
		for(var i=0;i<this.res.length;i++){
			str += `<a href="#">
					<img src="${this.res[i].url}"/>
					<p>"童年时光  【调理肠胃】婴儿童益生菌 宝宝益生菌婴幼儿 牛初乳益生元冲剂"</p>
					<span>￥499.00</span>
				</a>`;
		}
		box.innerHTML = str;
	}
	new List()
	
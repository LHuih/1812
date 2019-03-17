class Car{
	constructor(options){
		this.url = options.url;
		this.tbody = options.tbody;
		this.cookies = JSON.parse($.cookie("goods"));
		this.load();
		this.addEvent();
		this.del();
	}
	load(){
		$.ajax({
			url:this.url,
			success:(res)=>{
				this.res = res;
				this.getCookie();
			}
		})
	}
	getCookie(){
		this.goods = JSON.parse($.cookie("goods"));
		
		this.display();
	}
	display(){
		var str = "";
//		console.log(JSON.parse($.cookie("goods")))
		this.goods.forEach((goodsValue)=>{
			this.res.forEach((resValue,key)=>{
				if(resValue.goosid == goodsValue.id){
					str += `<tr data-id="${this.res[key].goosid}">
								<td><img src="${this.res[key].url}" class="img"/>
								<br/><span class="span">${this.res[key].name}</span>
								</td>
								<td class="td1">1</td>
								<td class="zhong"><div class="shuliang clear">
										<div class="num clear">
											<span class="btn1">-</span>
											<em class="ee">1</em>
											<span class="btn2">+</span>
										</div>
									</div>
								</td>
								<td class="td2">￥128.00</td>
								<td><em class="mm">删除</em></td>
							</tr>`;
				}
			})
		})
		this.tbody.html(str);
	}
	del(){
		let that = this;
		this.tbody.on("click",".mm",function(){
			let id = $(this).parent().parent().attr("data-id");
			for(var i = 0;i < that.cookies.length;i++){
				if(id == that.cookies[i].id){
					that.cookies.splice(i,1);
				}
			}
			$.cookie("goods",JSON.stringify(that.cookies));
			$(this).parent().parent()[0].remove();
		});
	}
	addEvent(){
		var that = this;

		this.tbody.on("click","a",function(){
			that.id = $(this).parent().parent().attr("myid");
			console.log(that.id);
			$(this).parentsUntil("tbody").remove();
			that.remove();
		})

		this.tbody.on("input",".num",function(){
			that.num = parseInt($(this).val());
			that.id = $(this).parent().parent().attr("myid");
			that.changeCookie();
		})
		
		this.tbody.on("click",".down",function(){
			that.num = parseInt($(this).next().val());
			that.id = $(this).parent().parent().attr("myid");
			if(that.num == 1){
				alert("商品不能在小于零了");
			}else{
				that.num--;
			}
			for(let i=0;i<that.goods.length;i++){
				if(that.goods[i].id == that.id){
					that.goods[i].num = that.num;
					console.log(that.goods[i].num);
					Array.from($(".num"))[i].value = +that.num;
					break;
				}
			}
		
			$.cookie("goods",JSON.stringify(that.goods));
			
			that.compute();
		})

		this.tbody.on("click",".jiaru",function(){
			that.num = parseInt($(this).prev().val());
			that.id = $(this).parent().parent().attr("myid");
			that.num++;
			for(var i=0;i<that.goods.length;i++){
				if(that.goods[i].id == that.id){
					that.goods[i].num = +that.num;
					console.log("num:"+that.goods[i].num);
					Array.from($(".num"))[i].value = +that.num;
					break;
				}
			}
			$.cookie("goods",JSON.stringify(that.goods));
			
			that.compute();
		})
	}
	remove(){
		for(var i=0;i<this.goods.length;i++){
			if(this.goods[i].id == this.id){
				break;
			}
		}
		this.goods.splice(i,1);
		$.cookie("goods",JSON.stringify(this.goods));
	}
	changeCookie(){
		console.log(this);
		for(var i=0;i<this.goods.length;i++){
			if(this.goods[i].id == this.id){
				this.goods[i].num = this.num;
				console.log(this.num);
			}
		}
		$.cookie("goods",JSON.stringify(this.goods));
	}
	compute(goods){
		for(let i=0;i<this.goods.length;i++){
			var that = this;
			console.log($(".check"));
			this.check = $('.check')[i];
			this.tbody.on("click","this.check",function(){
				var mynum = 0;
				var mysum = 0.00;
				Array.from($(".mynum"))[0].innerHTML = "0";
				Array.from($(".price"))[0].innerHTML = "0.00";
				for(let k=0;k<that.goods.length;k++){
					if($(".check")[k].checked){
						mynum += that.goods[k].num;
						mysum += that.goods[k].num * parseFloat($(".cost")[i].innerText);
					}
				}
				Array.from($(".mynum"))[0].innerHTML = mynum;
				Array.from($(".price"))[0].innerHTML = mysum;
			})
			
		}
		
		Array.from($(".sum"))[0].onclick = ()=>{
			alert("正在为您结算，请稍等……");
		}
	}
}

new Car({
	url:"../json/goods.json",
	tbody:$("tbody"),
})





























































//class Car{
//  constructor(options){
//      this.cont = options.cont;
//      this.url = options.url;
//      this.load()
//      this.addEvent()
//  }
//  load(){
//      var that = this;
//      $.ajax({
//          url:this.url,
//          success:function(res){
//              that.res = JSON.parse(res);
//              that.getCookie()
//          }
//      })
//  }
//  getCookie(){
//      this.goods = JSON.parse($.cookie("goods"));
//      this.display()
//  }
//  display(){
//      var str = "";
//      for(var i=0;i<this.res.length;i++){
//          for(var j=0;j<this.goods.length;j++){
//              if(this.goods[j].id === this.res[i].goodsId){
//                  str += `<tr data-id="${this.res[i].goodsId}">
//                              <td><img src="${this.res[i].src}"/></td>
//                              <td>${this.res[i].name}</td>
//                              <td>${this.res[i].price}</td>
//                              <td><input type="number" id="num" value="${this.goods[j].num}" min=1></td>
//                              <td><em>删除</em></td>
//                          </tr>`
//              }
//          }
//      }
//      this.cont.html(str);
//  }
//  addEvent(){
//      var that = this;
//      this.cont.on("click","em",function(){
//          that.id = $(this).parent().parent().attr("data-id");
//          $(this).parent().parent().remove();
//          that.setCookie(function(index){
//              that.goods.splice(index,1)
//          })
//      })
//      this.cont.on("input","#num",function(){
//          that.id = $(this).parent().parent().attr("data-id");
//          that.num = $(this).val();
//          that.setCookie(function(index){
//              that.goods[index].num = that.num;
//          })
//      })
//  }
//  setCookie(cb){
//      for(var i=0;i<this.goods.length;i++){
//          if(this.goods[i].id == this.id){
//              cb(i)
//          }
//      }
//      $.cookie("goods",JSON.stringify(this.goods))
//  }
//}
//new Car({
//  cont:$("tbody"),
//  url:"../php/select.php"
//})
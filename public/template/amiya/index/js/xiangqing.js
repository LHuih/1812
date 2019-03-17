var box = document.querySelector(".main .goods")
	function Shangp(){
		this.url="../json/goods.json";
		this.load()
		this.id = location.search.replace("?","")
		this.addEvent()
		this.setGoods()
	}
	Shangp.prototype.load =function(){
		var that=this;
		ajaxGet(this.url).then(function(res){
			that.res=JSON.parse(res);
			that.display()
			console.log(that.res);

		},function(code){
			console.log("请求失败"+code);
		})
	}
	
	Shangp.prototype.display=function(){
		var str="";
		for(var i=0;i<this.res.length;i++){
			console.log(this.id,this.res[i])
			if(this.id == this.res[i].goosid){
				str = `<div class="goods-l">
			<img src="${this.res[i].url}" />
		</div>
		<div class="goods-r clear">
			<p>
				<img src="https://img04.miyabaobei.com/d1/p2/2016/01/12/99/d3/99d3089ae1700a50a17da30c84abccba.png"/>&nbsp;美国品牌 | 蜜芽保税仓发货
			</p>
			<p class="te"><b>[包邮]&nbsp;</b>${this.res[i].name}</p>
			<p class="ert">${this.res[i].namet}</p>
			<div class="jiage clear">
				<div class="j-l clear">
					<span>售价</span>
					<span>优惠</span>
				</div>
				
			<div class="j-r clear">
				<div class="j-r-l clear">					
					<span class="te">￥252.00</span>
					<span class="xiaog">￥397.00</span>
					<i>进口税
					<span>按照国家最新政策，对跨境商品征收相应进口税</span></i>				
				</div>
				<p>
					<i>限时秒杀</i>&nbsp;&nbsp;每人限购5件,总限购100件,超出按照原价计算
				</p>
				<div class="zhijiang"><i class="te">直降</i>&nbsp;直降</div>
				<div class="lingquan"><i>领券</i>&nbsp;<a href="#">满300减50</a></div>	
				
			</div>
				
			</div>
				<div class="shuliang clear">
					<b>数量</b>
					<div class="num clear">
						<span class="btn1">-</span>
						<em>1</em>
						<span class="btn2">+</span>
					</div>
				</div>
			<a href="car2.html" class="jiaru">加入购物车</a>
			<p class="bianma">&nbsp;编码  ： &nbsp;&nbsp;&nbsp;727038</p>
			<ul class="dian clear">
				<li>
					<i></i>
					自营
					<div class="yincang">
						本商品由蜜芽自营仓库发货
					</div>
				</li>
				<li>
					<i></i>
					包邮
	<div class="yincang">
						本商品支持包邮，除港澳台和部分偏远地区(如新疆、青海、西藏等)外，您无需承担运费
					</div>
				</li><li>
					<i></i>
					退换货规则
						<div class="yincang">
						组合套装退换货规则与套装内单品规则一致
						</div>
				</li><li>
					<i></i>
					正品保证
						<div class="yincang">
						所有商品均有太平洋保险承包产品质量保证险
					</div>
				</li>
			</ul>
		</div>`
			}
		}
		box.innerHTML = str;
	}
	Shangp.prototype.addEvent=function(){
        var that = this;
        box.addEventListener("click",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.nodeName == "tbody"){
                that.id = target.parentNode.getAttribute("myid");
                that.setGoods()
            }
        })
    }
    Shangp.prototype.setGoods=function(){
        this.goods = $.cookie("goods")=== null ? [] : JSON.parse($.cookie("goods"));
        if(this.goods.length < 1){
            this.goods.push({
                id:this.id,
                num:1
            })
        }else{
            var onoff = true;
            for(var i=0;i<this.goods.length;i++){
                if(this.goods[i].id === this.id){
                    this.goods[i].num++;
                    onoff = false;
                    break;
                }
            }
            if(onoff){
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }
        }
        $.cookie("goods",JSON.stringify(this.goods));
    }
	new Shangp()
	
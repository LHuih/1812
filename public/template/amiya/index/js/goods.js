class Goods{
    constructor(options){
        this.cont = options.cont;
        this.url = options.url;
        this.load()
        this.addEvent()
    }
    load(){
        var that = this;
        ajaxGet(this.url).then(function(res){
        	console.log(res)
            that.res = JSON.parse(res);
            that.display()
        })
    }
    display(){
        var str = "";
        this.res.forEach(function(value){
            str += `<tr myid="${this.res[i].goosid}">
					<td><img src="${this.res[i].url}"/>
					<br/><span class="span">${this.res[i].name}</span>
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
					<td class="td2">${this.res[i].price}</td>
					<td><em class="mm">删除</em></td>
				</tr> `;
        })
        this.cont.innerHTML = str;
    }
    addEvent(){
        var that = this;
        this.cont.addEventListener("click",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.nodeName == "EM"){
                that.id = target.parentNode.getAttribute("index");
                that.setGoods()
            }
        })
    }
    setGoods(){
        this.goods = getCookie("goods")==="" ? [] : JSON.parse(getCookie("goods"));
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
        setCookie("goods",JSON.stringify(this.goods));
    }
}

new Goods({
    cont:document.getElementById("cont"),
    url:"../php/select.php"
})
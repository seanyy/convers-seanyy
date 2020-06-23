// 放大镜
var olayer=document.querySelector(".layer");
var osmallimg=document.querySelector(".smallimg");
var obigimg=document.querySelector(".bigimg");
var bigimg=document.querySelector(".bigimg>img");
var xq=document.querySelector(".xq");
var xqConent=document.querySelector(".xq>.xq-content");
var c=document.querySelector(".xq>.xq-content>.zj");
var zj=document.querySelector(".xq>.xq-content>.zj");
var h2=document.querySelector("xq>.xq-content>.zj>h2");
// console.log(xq.parentNode)
osmallimg.onmouseover=function(){
	olayer.style.display="block";
	obigimg.style.display="block";
	bigimg.style.display="block"
}
osmallimg.onmouseout=function(){
	olayer.style.display="none";
	obigimg.style.display="none";
}
// document.onscroll=function(){
	// console.log(document.documentElement.scrollTop)
// }
// console.log(zj.parentNode)
osmallimg.onmousemove=function(event){
	
	var x=event.clientX-olayer.offsetWidth/2-osmallimg.offsetLeft-zj.offsetLeft-160;
	var y=event.clientY-olayer.offsetHeight/2-osmallimg.offsetTop-xq.offsetTop+document.documentElement.scrollTop-45;
	// console.log(x)
	// console.log(y)
	var maxX=osmallimg.clientWidth-olayer.offsetWidth;
	// console.log(maxX)
	var maxY=osmallimg.clientHeight-olayer.offsetHeight;
	if(x<0){
		x=0;
	}
	if(x>maxX){
		x=maxX;
	}
	if(y<0){
		y=0;
	}
	if(y>maxY){
		y=maxY;
	}
	olayer.style.left=x+"px";
	olayer.style.top=y+"px";
	
	var overBigX=x*(bigimg.offsetWidth-obigimg.clientWidth)/(osmallimg.clientWidth-olayer.offsetWidth);
	var overBigY=y*(bigimg.offsetHeight-obigimg.clientHeight)/(osmallimg.clientHeight-olayer.offsetHeight);
	bigimg.style.left=-overBigX+"px"; 
	bigimg.style.top=-overBigY+"px";
}

// 图片切换
var simgs=document.querySelectorAll(".zj-bottom>ul>li>img");
var bimgs=document.querySelectorAll(".smallimg>img")
for(var i=0;i<simgs.length;i++){
	simgs[i].index=i;
	simgs[i].onclick=function(){
		num=this.index;
		for(var j=0;j<bimgs.length;j++){
			bimgs[j].style.display="none";
			bimgs[num].style.display="block";
		}
	}
}
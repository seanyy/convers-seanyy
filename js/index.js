//文字定时切换
		var ops=document.querySelectorAll(".text>p");
		var a=0;
		setInterval(function(){
			a++;
			if(a>1){
				a=0;
			}
			for(var i=0;i<ops.length;i++){
				ops[i].style.display="none";
				ops[a].style.display="block";
			}
		},3500);
		
		
		//轮播图
		var cimgs=document.querySelectorAll(".lunbo>img");
		var oleft=document.querySelector(".lunbo>.tubiao>.left");
		var oright=document.querySelector(".lunbo>.tubiao>.right");
		var num=0;
		oleft.onclick=function(){
			num++;
			if(num>4){
				num=0;
			}
			for(var i=0;i<cimgs.length;i++){
				cimgs[i].style.opacity="0";
				cimgs[num].style.opacity="1";
			}
		}
		oright.onclick=function(){
			num--;
			if(num<0){
				num=4;
			}
			for(var i=0;i<cimgs.length;i++){
				cimgs[i].style.opacity="0";
				cimgs[num].style.opacity="1";
			}
		}
		var time=setInterval(function(){
			oleft.onclick();
		},2500);
		var clunbo=document.querySelector(".lunbo");
		clunbo.onmouseover=function(){
			clearInterval(time);
		}
		clunbo.onmouseout=function(){
			time=setInterval(function(){
				oleft.onclick();
			},2500);
		}		
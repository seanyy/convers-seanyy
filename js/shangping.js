var clis=document.querySelectorAll(".sp-content>.left>ul>li");
var culs=document.querySelectorAll(".sp-content>.right>ul");
for(var i=0;i<clis.length;i++){
	clis[i].index=i;
	clis[i].onclick=function(){
		num=this.index;
		for(var j=0;j<culs.length;j++){
			culs[j].style.display="none";
			culs[num].style.display="block";
		}
	}
}
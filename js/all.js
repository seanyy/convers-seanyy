//登录
var ologin=document.getElementById("login");
var clogin=document.querySelector(".login");
var cip2=document.querySelector(".ip2");
var cbai=document.querySelector(".bai");
ologin.onclick=function(){
	clogin.style.display="block";
	cregister.style.display="none";
	oxsousuo.style.display="none";
	return false;
}
var oall1=document.querySelector(".all1");
oall1.onclick=function(){
	clogin.style.display="none";
}
// 登录手机号
var cip1=document.querySelectorAll(".ip1");
cip1[0].onblur=function(){
	var ospan1=document.getElementById("span1");
	if(cip1[0].value==""){
		ospan1.innerHTML="请输入手机号码";
		ospan1.style.color="red";
		return false;
	}
	var reg=/^1[3|4|5|6|7|8]\d{9}$/;
	if(reg.test(cip1[0].value)==false){
		ospan1.innerHTML="请输入正确的手机号码";
		ospan1.style.color="red";
	}else{
		ospan1.innerHTML="";
	}
}
// 登录密码
cip1[1].onblur=function(){
	var ospan2=document.getElementById("span2");
	if(cip1[1].value==""){
		ospan2.innerHTML="请输入密码";
		ospan2.style.color="red";
		return false;
	}
	if(cip1[1].value.length>16||cip1[1].value.length<6){
		ospan2.innerHTML="账户密码的长度必须为6-16";
		ospan2.style.color="red";
	}else{
		ospan2.innerHTML="";
	}
}
var csub1=document.querySelector(".sub1");
var ospan3=document.getElementById("span3");
cip2.onclick=function(){
	if(cip2.checked){
		csub1.style.background="black";
		ospan3.innerHTML="";
	}else{
		csub1.style.background="#E0E0E0";
	}
}
// 登录表单验证
var omyform1=document.myform1;
omyform1.onsubmit=function(){
	if(cip2.checked==false){
		ospan3.innerHTML="请先勾选按钮";
		ospan3.style.color="red";
		return false;
	}
}


var oguanbi=document.querySelector(".guanbi");
oguanbi.onclick=function(){
	clogin.style.display="none"
}
//注册
var oregister=document.getElementById("register");
var cregister=document.querySelector(".register");
oregister.onclick=function(enent){
	cregister.style.display="block";
	clogin.style.display="none";
	oxsousuo.style.display="none";
	return false;
}
var oall2=document.querySelector(".all2");
oall2.onclick=function(){
	cregister.style.display="none";
}
var oguanbi1=document.querySelector(".guanbi1");
oguanbi1.onclick=function(){
	cregister.style.display="none";
}
// 注册手机号码
var ophone=document.getElementById("phone");
ophone.onblur=function(){
	var cspan3=document.querySelector(".span3");
	if(ophone.value==""){
		cspan3.innerHTML="请输入手机号码";
		return false;
	}
	var reg=/^1[3|4|5|6|7|8]\d{9}$/;
	if(reg.test(ophone.value)==false){
		cspan3.innerHTML="请输入正确的电话号码";
		return false;
	}else{
		cspan3.innerHTML="";
	}
}
// 注册邮箱
var oemail=document.getElementById("email");
oemail.onblur=function(){
	var cspan4=document.querySelector(".span4");
	if(oemail.value==""){
		cspan4.innerHTML="请输入邮箱";
		return false;
	}
	var reg=/^([A-z]|[0-9])(\w|\-)+@[A-z0-9]+\.([A-z]{2,4})$/;
	if(reg.test(oemail.value)==false){
		cspan4.innerHTML="请输入正确的邮箱";
		return false;
	}else{
		cspan4.innerHTML="";
	}
}
// 注册密码
var opwd=document.getElementById("pwd");
opwd.onblur=function(){
	var cspan5=document.querySelector(".span5");
	if(opwd.value==""){
		cspan5.innerHTML="请输入密码";
		return false;
	}if(opwd.value.length<6){
		cspan5.innerHTML="密码的长度至少为六位数";
		return false;
	}else{
		cspan5.innerHTML="";
	}
}
// 注册确认密码
var oupwd=document.getElementById("upwd");
oupwd.onblur=function(){
	var cspan6=document.querySelector(".span6");
	if(oupwd.value==""){
		cspan6.innerHTML="确认密码不能为空";
		return false;
	}
	if(opwd.value!=oupwd.value){
		cspan6.innerHTML="与密码输入不一致";
		return false;
	}else{
		cspan6.innerHTML="";
	}
}
// 注册短信验证码
var iyzm=document.getElementById("yzm");
var ospan7=document.querySelector(".span7");
iyzm.onblur=function(){
	if(iyzm.value==""){
		ospan7.innerHTML="请输入短信验证码"
	}
}
// 勾选框
var cinput1=document.querySelector(".input1");
var csub=document.querySelector(".sub");
var ospan8=document.querySelector(".span8");
cinput1.onclick=function(){
	if(cinput1.checked==true){
		csub.style.background="black";
		csub.style.color="white";
		ospan8.innerHTML="";
	}else{
		csub.style.background="";
	}
}
//表单提交
var oform=document.myform;
oform.onsubmit=function(){
	if(cinput1.checked==false){
		ospan8.innerHTML="请勾选按钮";
		return false;
	}
}
	
//搜索
var osousuo=document.getElementById("sousuo");
var oxsousuo=document.getElementById("xsousuo");
var gsousuo=document.getElementById("gsousuo");
var ojujiao=document.getElementById("jujiao");
osousuo.onclick=function(){
	clogin.style.display="none";
	cregister.style.display="none";
	if(oxsousuo.style.display=="none"){
		oxsousuo.style.display="block";
	}else{
		oxsousuo.style.display="none";
	}
}
var oall=document.querySelector(".all");
oall.onclick=function(){
	oxsousuo.style.display="none";
}
gsousuo.onclick=function(){
	oxsousuo.style.display="none";
}
ojujiao.onfocus=function(){
	ojujiao.placeholder="";	
}
ojujiao.onblur=function(){
	ojujiao.placeholder="想找什么随便搜";
}
// 男的二级菜单栏
var oboy=document.querySelector(".boy");
var idboy=document.getElementById("boy");
var boydang=document.querySelector(".boy>.dang");
idboy.onmouseover=function(){
	oet.style.display="none";
	ogirl.style.display="none";
	oboy.style.display="block";
	oboy.onmouseover=function(){
		oboy.style.display="block";
	}
}
idboy.onmouseout=function(){
	oboy.style.display="none";
}
boydang.onmousemove=function(){
	oboy.style.display="none";
}

// 女的二级菜单栏
var ogirl=document.querySelector(".girl");
var idgirl=document.getElementById("girl");
var girldang=document.querySelector(".girl>.dang");
idgirl.onmouseover=function(){
	oboy.style.display="none";
	oet.style.display="none";
	ogirl.style.display="block";
	ogirl.onmouseover=function(){
		ogirl.style.display="block";
	}
}
idgirl.onmouseout=function(){
	ogirl.style.display="none";
}
girldang.onmousemove=function(){
	ogirl.style.display="none";
}
// 儿童二级菜单栏
var oet=document.querySelector(".et");
var idet=document.getElementById("et");
var etdang=document.querySelector(".et>.dang");
idet.onmouseover=function(){
	oboy.style.display="none";
	ogirl.style.display="none";
	oet.style.display="block";
	oet.onmouseover=function(){
		oet.style.display="block";
	}
}
idet.onmouseout=function(){
	oet.style.display="none";
}
etdang.onmousemove=function(){
	oet.style.display="none";
}


// 雪碧图
var ovb=document.querySelector(".vb");
ovb.onmouseover=function(){
	ovb.style.backgroundPosition="0px 0px"
}
ovb.onmouseout=function(){
	ovb.style.backgroundPosition="-75px 0px"
}

var ovx=document.querySelector(".vx");
ovx.onmouseover=function(){
	ovx.style.backgroundPosition="149px -75px"
}
ovx.onmouseout=function(){
	ovx.style.backgroundPosition="75px -75px"
}

// 回到顶部
var ctop=document.querySelector(".top");
	document.onscroll=function(){
		var h=document.body.scrollTop || document.documentElement.scrollTop;
		if(h>=200){
			ctop.style.opacity="1";
		}else{
			ctop.style.opacity="0";
		}
	}
ctop.onclick=function(){
	var h=document.body.scrollTop || document.documentElement.scrollTop;
	var time=setInterval(function(){
		if(h>=5){
			h-=5;
			document.body.scrollTop=h;
			document.documentElement.scrollTop=h;
		}else{
			document.body.scrollTop=0;
			document.documentElement.scrollTop=0;
			clearInterval(time);
		}
	},2);
}

// 倒计时
function fun(){
	var date=new Date();
	var hour=24-date.getHours();
	var minute=60-date.getMinutes();
	var second=60-date.getSeconds();
	var daojishi=document.querySelector(".head>.head-dh>.zj>p");
	daojishi.innerHTML="上新倒计时 "+hour+" 时 "+minute+" 分 "+second+" 秒 ";
}
setInterval(fun,1000)
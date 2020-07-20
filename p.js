function mywatch(){
	var time =new Date();
	var hr=time.getHours();
	var mi=time.getMinutes();
	var sec=time.getSeconds();
	var day=time.getDate();
	var month=time.getMonth()+1;
	var year=time.getFullYear();
	
	var se= "AM";
	if(hr > 12){
		hr= hr-12;
		se= "PM";
	}
	if(hr<10){hr="0"+hr;}
	if(mi<10){mi="0"+mi;}
	if(sec<10){sec="0"+sec;}
	if(day<10){day="0"+day;}
	if(month<10){month="0"+month;}
	var mytime= hr+":"+mi+":"+sec+"    "+se ;
	var today= day+"/"+month+"/"+year ;
	var now =document.getElementById("watch");
	var mydate=document.getElementById("date");
	mydate.innerText= today;
	now.innerText= mytime ;
	
	setTimeout(mywatch,1000);
	
}
mywatch();
//////////////////////home
function home(){
	signframe.style.display="block";
	showup.style.display= "none";
	mainframe.style.display="none";
	myprofile.style.display="none";
}
/////////////////////signup

function signup(){
	var signframe=document.getElementById("signframe");
	var showup=document.getElementById("showup");
	showup.style.display="block";
	signframe.style.display="block"; 
 }   
/////////////////// menu choice
        var lec=document.getElementById("lec");
		var mainframe=document.getElementById("mainframe");
		var ex=document.getElementById("ex");
		var con=document.getElementById("con");
        var lecimg=document.getElementById("lecimg");
        var eximg=document.getElementById("eximg");
        var coning=document.getElementById("conimg");
        var signframe=document.getElementById("signframe")
function choice1(){
	if("c"){
		con.innerText="Contact With Lectuerers C";
		ex.innerText="some Exampels For C";
		lec.innerText="C lecture";
		mainframe.style.display="block";
		signframe.style.display="none";
myprofile.style.display="none";
	}
}
function choice2(){
	if("c++"){
		con.innerText="Contact With Lectuerers C++";
		ex.innerText="some Exampels For C++";
		lec.innerText="C++ lecture";
		mainframe.style.display="block";	
		signframe.style.display="none";
	myprofile.style.display="none";
	}
}

function choice3(){
	if("c--"){
		con.innerText="Contact With Lectuerers C--";
		ex.innerText="some Exampels For C--";
		lec.innerText="C-- lecture";
		mainframe.style.display="block";	
		signframe.style.display="none";
	myprofile.style.display="none";
	}
}
function choice4(){
	if("c#"){
		con.innerText="Contact With Lectuerers C#";
		ex.innerText="some Exampels For C#";
		lec.innerText="C# lecture";
		mainframe.style.display="block";	
		signframe.style.display="none";
	   myprofile.style.display="none";
	}
}
function choice5(){
	if("Pythoe"){
		con.innerText="Contact With Lectuerers Pythone";
		ex.innerText="some Exampels For Pythone";
		lec.innerText="Pythone lecture";
		mainframe.style.display="block";	
		signframe.style.display="none";
	myprofile.style.display="none";
	}
}
function choice6(){
	if("java"){
		con.innerText="Contact With Lectuerers java";
		ex.innerText="some Exampels For java";
		lec.innerText="java lecture";
		mainframe.style.display="block";
		signframe.style.display="none";
	myprofile.style.display="none";
	}
}
function choice7(){
	if("JavaScript"){
		con.innerText="Contact With Lectuerers JavaScript";
		ex.innerText="some Exampels For JavaScript";
		lec.innerText="JavaScript lecture";
		mainframe.style.display="block";	
		signframe.style.display="none";
	myprofile.style.display="none";
	}
}
function choice8(){
	if("Html"){
		con.innerText="Contact With Lectuerers Html";
		ex.innerText="some Exampels For Html";
		lec.innerText="Html lecture";
		mainframe.style.display="block";
		signframe.style.display="none";
	myprofile.style.display="none";
	}
}
function choice9(){
	if("css"){
		con.innerText="Contact With Lectuerers Css";
		ex.innerText="some Exampels For Css";
		lec.innerText="Css lecture";
		mainframe.style.display="block";	
		signframe.style.display="none";
	 	myprofile.style.display="none";	
	}
}
function choice10(){
	if("A.NET"){
		con.innerText="Contact With Lectuerers A.NET";
		ex.innerText="some Exampels For A.NET";
		lec.innerText="A.NET lecture";
		mainframe.style.display="block";
		signframe.style.display="none";
		myprofile.style.display="none";
	myprofile.style.display="none";
	}
}
function choice11(){
	if("JavaScript"){
		con.innerText="Contact With Lectuerers PHP";
		ex.innerText="some Exampels For PHP";
		lec.innerText="PHP lecture";
		mainframe.style.display="block";	
		signframe.style.display="none";
	}myprofile.style.display="none";
}
function choice12(){
	if("SQl"){
		con.innerText="Contact With Lectuerers SQl";
		ex.innerText="some Exampels For SQl";
		lec.innerText="SQl lecture";
		mainframe.style.display="block";
		signframe.style.display="none";
		myprofile.style.display="none";
	}
}
/////////////////search
var searchfield=document.getElementById("searchfield");
var form=document.getElementById("gosearch");
form.addEventListener('submit',function(){
	if(!searchfield.value){
		alert ("input something!!")
	}
	else if(searchfield.value == "c" ){
		choice1();
	}
	else if(searchfield.value == "c++" ){
		choice2();
	}
	else if(searchfield.value == "c" ){
		choice1();
	}
	else if(searchfield.value == "c--" ){
		choice3();
	}
	else if(searchfield.value == "c#" ){
		choice4();
	}
	else if(searchfield.value == "Pythone" ){
		choice5();
	}
	else if(searchfield.value == "java" ){
		choice6();
	}
	else if(searchfield.value == "javascript" ){
		choice7();
	}
	else if(searchfield.value == "html" ){
		choice8();
	}
	else if(searchfield.value == "css" ){
		choice9();
	}else if(searchfield.value == "A.NET" ){
		choice10();
	}else if(searchfield.value == "PHP" ){
		choice11();
	}else if(searchfield.value == "SQL" ){
		choice12();
	}
	else {
		alert("insert a appropriate value");
	}
}
					 )
///////////////////profile
var myprofile =document.getElementById("myprofile");
function profile(){
	myprofile.style.display="block";
	signframe.style.display="none";
}
var youdone =[];

function intro (){
	youdone.push("introduction");
	
}
function cl1 (){
	youdone.push("class 1");
}
function cl2 (){
	youdone.push("class 2");
}
function cl3 (){
	youdone.push("class 3");
}
console.log(total);
var total=document.getElementById("total"); 
total.innerText= youdone;

//////////////////courseselect
var selectcourse=document.getElementById("selectcourse");
function content(){
	selectcourse.style.display="flex";
	signframe.style.display="none";
	mainframe.style.display="none";
	myprofile.style.display="none";
}






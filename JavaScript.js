
var x = 123e5;
var a = -4 , b=0 , c=2 , d= (a / b) ;
var e = "Please locate where 'locate' occurs!";
var f = e.indexOf("'locate'");
var f1 = e.lastIndexOf("'locate'");
var f2 = e.search("'locate'");
var g = e.length;




function fun()
{
	document.getElementById('demo').innerHTML = '!!Text Changed!!';
	
}
function fun1()
{
	document.getElementById('change').src = './Images/water.jpg';

}
function fun2()
{
	document.getElementById('change').src = './Images/waterfall.jpg';
}

function fun3()
{
	document.getElementById('var').value = (x);
}
/*function fun4()
{
	document.getElementById('app').innerHTML = person;
}
function fun5()
{
	document.getElementById('app').innerHTML = y;
}*/



var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//window.alert('This is a alert box!');
//console.log(5+9);


$(document).ready(function(){
	if (x)
	document.getElementById('he').innerHTML = x;
	document.getElementById('str').innerHTML = e;
	document.getElementById('str-ch1').innerHTML = "Index:" + f;
	document.getElementById('str-ch2').innerHTML = "length:" + (g);
	document.getElementById('str-ch3').innerHTML = "lastindex:" + (f1);
	document.getElementById('str-ch4').innerHTML = "search result : " + (f2);
})

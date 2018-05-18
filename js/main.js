//functions
/*foo();

// декларативный || function declaration
function foo(){
	alert('Hello from function 1');
}

foo();


// функциональные выражения || литерал || functional expression
var foo2 = function(){
	alert('hello from function 2');
}

foo2();*/

/*function foo(message){
	alert(message);
}


foo('Hello from parametr');
foo('Hello');

var foo2 = function(message, mes2){
	if(mes2 == undefined){
		mes2 = 'hello';
	}
	console.log(message, mes2);
}

var text = 'Hello2';

foo2(text);
foo2(text, 'hello12314123');

*/
/*function sum(a,b){
	if(a == undefined && b == undefined){
		a = b = 6;
	}	
	return a + b;
}
console.log(sum());
*/
/*
var c = sum(1,2);
var d = sum(4,6);
var e,f;
e = 7;
f = 10;
var result = sum(e,f);
console.log(c);
console.log(d);
console.log(result);
console.log(sum(6));
*/
/*
function foo(a, b){
	if(a == undefined && b == undefined){
		return;
	}
	return a + b
}
console.log(foo())
console.log(foo(2,4))
function foo2(){
	return
	alert('hello')
}

foo2();*/


//arrays

//[], //new Array() - for empty
/*var arr = ['hello', 1, true, 1234, 123123, 'dgsghafs'];
var arr2 = new Array(1,2,3,4,5);// array with 1,2,3,4,5 as elements
var arr3 = new Array(7); // empty array with length 7
arr3[4] = 4;
arr[8] = 5;
var arr4 = [];
arr4.length = 8;
console.log(arr4);*/
/*
console.log(arr);
console.log(arr2);
console.log(arr3);
*/
/*console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[7]);*/
/*for(var i = 0; i < arr.length; i++){
	console.log(arr[i]);
}*/
//arr[arr.length-1]
/*
var arr = new Array(10);
//creating array 10x10
for (var i = 0; i < arr.length; i++) {	
	arr[i] = new Array(10);
}
//input data in arr 10x10
for (var i = 0; i < arr.length; i++) {
	for(var j = 0; j < arr.length; j++){
		arr[i][j] = 0; 
	}		
}
console.log(arr);

//document.write = data;
for (var i = 0; i < arr.length; i++) {
	for(var j = 0; j < arr.length; j++){
		document.write(arr[i][j]); 
	}
	document.write('<br>')		
}

*/


// random - from 0 to 1
//(max - min)+min) + 1
/*var random = Math.round(Math.random()*10)
console.log(random);*/

var level = prompt('choose level - easy, medium, hard')
switch(level){
	case 'easy':
		var result;
		do{
		result = +prompt('Guess number from 1 - 10');
		random = Math.round(Math.random()*9 + 1)
		}while(result !== random);
		break;
	case 'medium':
		var result;
		var count = 5;
		do{
		random = Math.round(Math.random()*9 + 1)
		console.log(random)
		result = +prompt('Guess number from 1 - 10');
		if(result == random){
			alert('you win')
			break;
		}
		count--;
		alert(count + " tries left");
		}while(result !== random && count !== 0);
		if(count == 0){
			alert('you loooooose!!!!')
		}
		break;
	default: 
		alert('incorrect data')
}
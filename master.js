// do not remove this file from the folder
// the cl() is used without parameters
// the clea() is used without parameters
// the square root {root()} is applicable only on [num1]
//same applicable to the random number {rnd()}

//declaring universal values for information
console.log(Date());

//I mean it
console.warn("do not call  death() from the console or else bear the consequences");

 // true functions start

function add(num1 , num2) {
var num1 = Number(document.getElementById("sum1").innerHTML);
var num2 = Number(document.getElementById("sum2").innerHTML);
if (isNaN(num1) || isNaN(num2)) {
  alert( "please enter a valid number"+"\n"+ "FYI: NaN stands for Not a Number");
  console.error("enter a valid number");
}
document.getElementById("ans").innerHTML = num1 + num2 ;
}

function sub(num1 , num2) {
  var num1 = Number(document.getElementById("sum1").innerHTML);
  var num2 = Number(document.getElementById("sum2").innerHTML);
  if (isNaN(num1) || isNaN(num2)) {
    alert( "please enter a valid number"+"\n"+ "FYI: NaN stands for Not a Number");
    console.error( "enter a valid number");
  }
  document.getElementById("ans").innerHTML = num1 - num2 ;
}

function prod(num1 , num2) {
  var num1 = Number(document.getElementById("sum1").innerHTML);
  var num2 = Number(document.getElementById("sum2").innerHTML);
  if (isNaN(num1) || isNaN(num2)) {
    alert( "please enter a valid number"+"\n"+ "FYI: NaN stands for Not a Number");
    console.error( "enter a valid number");
  }
  document.getElementById("ans").innerHTML = num1 * num2 ;
}

function quo(num1 , num2) {
  var num1 = Number(document.getElementById("sum1").innerHTML);
  var num2 = Number(document.getElementById("sum2").innerHTML);
  if (isNaN(num1) || isNaN(num2)) {
    alert( "please enter a valid number"+"\n"+ "FYI: NaN stands for Not a Number");
    console.error( "enter a valid number");
  }
  document.getElementById("ans").innerHTML = num1 / num2 ;
}

function mod(num1 , num2) {
  var num1 = Number(document.getElementById("sum1").innerHTML);
  var num2 = Number(document.getElementById("sum2").innerHTML);
  if (isNaN(num1) || isNaN(num2)) {
    alert( "please enter a valid number"+"\n"+ "FYI: NaN stands for Not a Number");
    console.error( "enter a valid number");
  }
  document.getElementById("ans").innerHTML = num1 % num2 ;
}

function exp(num1 , num2) {
  var num1 = Number(document.getElementById("sum1").innerHTML);
  var num2 = Number(document.getElementById("sum2").innerHTML);
  if (isNaN(num1) || isNaN(num2)) {
    alert( "please enter a valid number"+"\n"+ "FYI: NaN stands for Not a Number");
    console.error( "enter a valid number");
  }
  document.getElementById("ans").innerHTML = num1 ** num2 ;
}

function conc(num1 , num2) {
  var num1 = document.getElementById("sum1").innerHTML;
  var num2 = document.getElementById("sum2").innerHTML;
  console.log( "this function does not require strings or numbers ");
  document.getElementById("ans").innerHTML = num1 + num2 ;
}

function root(num1) {
  var num1 = Number(document.getElementById("sum1").innerHTML);
  var num2 = Number(document.getElementById("sum2").innerHTML);
  if (isNaN(num1)) {
    alert( "please enter a valid number"+"\n"+ "FYI: NaN stands for Not a Number");
    console.error( "enter a valid number");
  }
  document.getElementById("ans").innerHTML =  num1 ** (1/2) ;
}

function rootspec(num1 , num2) {
  var num1 = Number(document.getElementById("sum1").innerHTML);
  var num2 = Number(document.getElementById("sum2").innerHTML);
  if (isNaN(num1) || isNaN(num2)) {
    alert( "please enter a valid number"+"\n"+ "FYI: NaN stands for Not a Number");
    console.error( "enter a valid number");
  }
  document.getElementById("ans").innerHTML = num1 ** (1/num2) ;
}

function rnd(num1) {
  var num1 = Number(document.getElementById("sum1").innerHTML);
  var num2 = Math.random()
  if (isNaN(num1) ) {
    alert( "please enter a valid number"+"\n"+ "FYI: NaN stands for Not a Number");
    console.error( "enter a valid number");
  }
  document.getElementById("ans").innerHTML = Math.floor(num2 * num1);
}

function sumtoans(num1 , num2) {
  var num1 = document.getElementById("ans").innerHTML ;
  var num2 = document.getElementById("sum1").innerHTML;
  document.getElementById("sum1").innerHTML = num1 ;
}

function table(num1 , num2) {
  var num1 = Number(document.getElementById("sum1").innerHTML) ;
  var num2 = Number(document.getElementById("sum2").innerHTML) ;
  var num3 = "";
  var temp ;
  for (var i = 0; i < num2 + 1; i++) {
    temp = num1 + "x" + i+ "=" + i * num1 ;
    num3 = num3 + "<br> "  +  temp  ;
  }
  document.getElementById("ans").innerHTML = num3  ;
}

 function prime(num1 , result) {
  var num1 = Number(document.getElementById("sum1").innerHTML) ;
  var result = "prime"  ;
for (var i = 2; i <(num1-1); i++) {
  if (num1 % i == 0) {
    result = "composite" ;
    break ;
    }
  }
    document.getElementById("ans").innerHTML = result ;
}

function tabrel() {
  var num1 = document.getElementById("sum1").innerHTML ;
  var num2 = document.getElementById("sum2").innerHTML ;
  if (isNaN(num1)||isNaN(num2)) {
    alert( "please enter a valid number"+"\n"+ "FYI: NaN stands for Not a Number");
    console.error( "enter a valid number");
  }else {
    table();
  }
}
 // this one is not directly called
function callprime(num1) {
 var num1 = document.getElementById("sum1").innerHTML ;
 if (num1 == 0) {
   document.getElementById("ans").innerHTML = "nor prime nor composite" ;
 }else if (num1 == 1) {
   document.getElementById("ans").innerHTML = "nor prime nor composite" ;
 }else {
   prime() ;
 }
}

function callingprime() {
  var num1 = document.getElementById("sum1").innerHTML ;
  if (isNaN(num1)) {
    alert( "please enter a valid number"+"\n"+ "FYI: NaN stands for Not a Number");
    console.error("enter a valid number");
  }else {
    callprime() ;
  }
}

function clea(num1) {
  var num1 = document.getElementById("sum1").innerHTML ;
  var num2 = document.getElementById("ans").innerHTML ;
if ( num1 == "lorem") {
  lorem() ;
} else {
  ancl() ;
  }
}

  function cl() {
  document.getElementById("sum1").innerHTML = "" ;
  document.getElementById("sum2").innerHTML = "" ;
}

function ancl() {
  document.getElementById("ans").innerHTML = "" ;
}

//accesory functions start from here.

//i know they are hoisted but just for classification.

function log() {
  //call from console log
  console.log(
    "Made by yunus poonawla \n  not licsened under any thing and also completly open source \n font credits to google fonts  fonts.google.com  made with <3 and javascript"
  );
}

function death() {
    var num1 = [1 , 2 , 3 , 4 , 5, 6, 7 ,8 ,8 ,9 ,0 ,]
    for (var i = 0; i < num1.length;) {
     console.log(num1[i]);
    }
}

function lorem() {
  document.getElementById("ans").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

function test() {
  var num1 = document.getElementById("sum1").innerHTML ;
  var num2 = document.getElementById("sum2").innerHTML ;
  document.getElementById("ans").innerHTML = num1+ "<br>"+ num2 ;
}

function gcd(){
}


function evaluate(){
    
}
let string = ""

// Numbers
const one = document.getElementById("1").innerText;
function oneF(){
    console.log(string+=one);
    document.getElementById("output").innerHTML = string;
}
const two = document.getElementById("2").innerText;
function twoF(){
    console.log(string+=two);
    document.getElementById("output").innerHTML = string;
}
const three = document.getElementById("3").innerText;
function threeF(){
    console.log(string+=three);
    document.getElementById("output").innerHTML = string;
}
const four = document.getElementById("4").innerText;
function fourF(){
    console.log(string+=four);
    document.getElementById("output").innerHTML = string;
}
const five = document.getElementById("5").innerText;
function fiveF(){
    console.log(string+=five);
    document.getElementById("output").innerHTML = string;
}
const six = document.getElementById("6").innerText;
function sixF(){
    console.log(string+=six);
    document.getElementById("output").innerHTML = string;
}
const seven = document.getElementById("7").innerText;
function sevenF(){
    console.log(string+=seven);
    document.getElementById("output").innerHTML = string;
}
const eight = document.getElementById("8").innerText;
function eightF(){
    console.log(string+=eight);
    document.getElementById("output").innerHTML = string;
}

const nine = document.getElementById("9").innerText;
function nineF(){
    console.log(string+=nine);
    document.getElementById("output").innerHTML = string;
}
const zero = document.getElementById("0").innerText;
function zeroF(){
    console.log(string+=zero);
    document.getElementById("output").innerHTML = string;
}

// Operators
const add = document.getElementById("+").innerText;
function addF(){
    console.log(string+=add);
    document.getElementById("output").innerHTML = string;
}
const subtract = document.getElementById("-").innerText;
function subtractF(){
    console.log(string+=subtract);
    document.getElementById("output").innerHTML = string;
}
const multiply = document.getElementById("*").innerText;
function multiplyF(){
    console.log(string+=multiply);
    document.getElementById("output").innerHTML = string;
}
const divide = document.getElementById("/").innerText;
function divideF(){
    console.log(string+=divide);
    document.getElementById("output").innerHTML = string;
}

// Clear and Equal
const clear = document.getElementById("C").innerText;
function clears(){
    console.log(string="");
    document.getElementById("output").innerHTML = string;
}
const equal = document.getElementById("=").innerText;
function equals(){
    console.log(eval(string));
    document.getElementById("output").innerHTML = eval(string);
}
document.getElementById("output").innerHTML = string;